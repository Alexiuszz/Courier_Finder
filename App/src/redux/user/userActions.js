import * as actions from "./userTypes";
import { callApiEndpoint } from "../../api/ApiCall";

//login thunk
export const loginAction = (userData) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LOGIN_REQUEST });
    return callApiEndpoint(
      "auth/login",
      "post",
      userData,
      (res) => {
        if (res._id !== null && res._id !== undefined) {
          dispatch({ type: actions.LOGIN_SUCCESSFUL });
          dispatch({ type: actions.SET_USER, payload: res });
          dispatch(
            setUserToken(
              res._id + "@" + res.email,
              new Date(new Date().getTime() + 1000 * 60 * 60)
            )
          );
        } else {
          dispatch({
            type: actions.LOGIN_ERROR,
            payload: "Username or Password incorrect!",
          });
        }
      },
      (error) => {
        dispatch({ type: actions.LOGIN_ERROR, payload: error });
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
          window.location.href = "http://localhost:3002/auth/signin";
        }
      },
      (error) => {
        dispatch({ type: actions.SIGNUP_ERROR, payload: error });
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
    const storedData = JSON.parse(localStorage.getItem("userData"));

    //check if user token exists
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationTime) > new Date()
    ) {
      return callApiEndpoint(
        "/getUser",
        "get",
        {},
        (res) => {
          if (res.data._id !== null && res.data._id !== undefined) {
            dispatch(fetchUserSuccess(res.data));
            dispatch(
              setUserToken(
                res.data._id + "@" + res.data.email,
                new Date(new Date().getTime() + 1000 * 60 * 60)
              )
            );
          } else {
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
    }
  };
};

export const setUserToken = (newToken, expirationTime) => {
  return (dispatch, getState) => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: newToken,
        expirationTime: expirationTime.toISOString(),
      })
    );
    dispatch(setToken(newToken));
    dispatch(setExpirationTime(expirationTime));
  };
};

export const signout = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LOGGED_OUT });
  };
};

export const checkUserToken = (callback, fetch = true) => {
  return (dispatch, getState) => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationTime) > new Date()
    ) {
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

function setToken(newToken) {
  return { type: actions.SET_USER_TOKEN, payload: newToken };
}

function setExpirationTime(expirationTime) {
  return {
    type: actions.SET_TOKEN_EXPIRATION_TIME,
    payload: expirationTime,
  };
}
