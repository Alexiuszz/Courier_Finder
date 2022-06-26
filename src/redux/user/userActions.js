import * as actions from "./userTypes";
import { callApiEndpoint } from "../../api/ApiCall";
import { GetCookie } from "../../auth_setup/Cookie";
import * as keys from "../../api/config";

//login thunk
export const loginAction = (userData) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LOGIN_REQUEST, payload: true });
    return callApiEndpoint(
      "auth/login",
      "post",
      userData,
      (response) => {
        dispatch({ type: actions.LOGIN_REQUEST, payload: false });
        const res = { ...response._doc, token: response.token };
        console.log(res);
        if (res._id !== null && res._id !== undefined) {
          dispatch({ type: actions.LOGIN_SUCCESSFUL, payload: res });

          // dispatch({ type: actions.SET_USER, payload: res });
        } else {
          dispatch({
            type: actions.LOGIN_ERROR,
            payload: "Username or Password incorrect!",
          });
        }
      },
      (error) => {
        dispatch({ type: actions.LOGIN_REQUEST, payload: false });

        dispatch({
          type: actions.LOGIN_ERROR,
          payload: error,
        });
      }
    );
  };
};

//thunk
export const signupAction = (userData) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.SIGNUP_REQUEST });
    return callApiEndpoint(
      "auth/new-courier",
      "post",
      userData,
      (res) => {
        if (!res) {
          dispatch({
            type: actions.SIGNUP_ERROR,
            payload: "Email already exists",
          });
          return;
        } else {
          dispatch({ type: actions.SIGNUP_SUCCESSFUL, payload: res });
          window.location.href = `${
            process.env.REACT_APP_BASE_URL || keys.REACT_APP_BASE_URL
          }/#/profile`;
        }
      },
      (error) => {
        dispatch({ type: actions.SIGNUP_ERROR, payload: error });
      }
    );
  };
};

export const submitProfile = (profile) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.SUBMITTING_PROFILE, payload: true });
    return callApiEndpoint(
      "courier/set-profile",
      "post",
      profile,
      (res) => {
        res
          ? dispatch({ type: actions.PROFILE_SUBMITTED, payload: res })
          : dispatch({
              type: actions.SUBMITTING_PROFILE_ERROR,
              payload: "Error Submitting Profile",
            });
      },
      (err) => {
        dispatch({ type: actions.SUBMITTING_PROFILE_ERROR, payload: err });
      }
    );
  };
};

export const acctDropDown = (isBody = true) => {
  return (dispatch, getState) => {
    isBody
      ? dispatch({ type: actions.SET_ACCT_MENU_DROP, payload: false })
      : dispatch({
          type: actions.SET_ACCT_MENU_DROP,
          payload: !getState().user.acctMenuDrop,
        });
  };
};

export const fetchUser = () => {
  return (dispatch, getState) => {
    dispatch(fetchUserRequest());
    return callApiEndpoint(
      "courier/getCourier",
      "post",
      { token: getState().user.token, id: getState().user.user._id},
      (res) => {
        if (res._id !== null && res._id !== undefined) {
          dispatch(fetchUserSuccess(res));
        } 
        // else if (!res.sess) {
        //   dispatch(signout());
        // }
        else {
          return dispatch({
            type: actions.FETCH_USER_FAILURE,
            payload: "Invalid Request!",
          });
        }
      },
      (error) => {
        dispatch({ type: actions.FETCH_USER_FAILURE, payload: error });
      }
    );
  };
};

// export const setUserToken = (newToken, expirationTime) => {
//   return (dispatch, getState) => {
//     localStorage.setItem(
//       "userData",
//       JSON.stringify({
//         token: newToken,
//         expirationTime: expirationTime.toISOString(),
//       })
//     );
//     dispatch(setToken(newToken));
//     dispatch(setExpirationTime(expirationTime));
//   };
// };

export const signout = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LOGGED_OUT });
  };
};

export const checkUserToken = (callback, fetch = true) => {
  return (dispatch, getState) => {
    const authCookie = GetCookie("auth-token");
    if (authCookie && authCookie !== "") {
      if (getState().user !== {}) {
        callback();
        if (fetch) dispatch(fetchUser());
      }
    } else {
      dispatch(dispatch(signout()));
    }
  };
};

export const setExpirationTimeout = () => {
  let logoutTimer;
  return (dispatch, getState) => {
    const state = getState();
    if (state.token && state.tokenExpirationTime) {
      const remainingTime =
        state.tokenExpirationTime.getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => dispatch(signout()), remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  };
};
export const setBusy = (busy) => {
  return {
    type: actions.SET_BUSY,
    payload: busy,
  };
};

export const resetState = () => {
  return {
    type: actions.RESET_STATE,
  };
};
export const fetchUserRequest = () => {
  return {
    type: actions.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: actions.FETCH_USER_FAILURE,
    payload: error,
  };
};
