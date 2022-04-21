import * as actions from './userTypes';
import { callApiEndpoint } from '../../api/ApiCall';


export const loginAction = (userData) => {
  return (dispatch) => {
    dispatch({ type: actions.LOGIN_REQUEST });
    return callApiEndpoint(
      '/auth/login',
      'post',
      userData,
      (res) => {
        if (res.data._id !== null && res.data._id !== undefined) {          
        dispatch({ type: actions.LOGIN_SUCCESSFUL, payload: res });
          setUserToken(res.data._id + "@" + res.data.email, new Date(new Date().getTime() + 1000 * 60 * 60));
      } else {
          alert("Username or Password incorrect!");
      }
      },
      (error) => {
        dispatch({ type: actions.LOGIN_ERROR, payload: error })
      }
    )
  };
}

export const signupAction = (userData) => {
  return (dispatch) => {
    dispatch({ type: actions.LOGIN_REQUEST });
    return callApiEndpoint(
      '/auth/new-courier',
      'post',
      userData,
      (res) => {
        if (!res)
        dispatch({type: actions.SIGNUP_ERROR, payload: "Email already exists"})
          dispatch({ type: actions.SIGNUP_SUCCESSFUL, payload: res });
        
      },
      (error) => {
        dispatch({ type: actions.SIGNUP_ERROR, payload: error })
      }
    )
  };
}

export const setUserToken = (newToken, expirationTime) => {

  return (dispatch) => {
    dispatch({ type: actions.setTokenExpirationTime, payload: expirationTime });

    localStorage.setItem(
      'userData',
      JSON.stringify({
        token: newToken,
        expirationTime: expirationTime.toISOString()
      })
    );
    dispatch({ type: actions.setUserToken, payload: newToken });
  };
}

export const fetchUserRequest = () => {
  return {
    type: actions.FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = users => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: actions.FETCH_USER_FAILURE,
    payload: error
  }
}
