import * as actions from './userTypes';
import { callApiEndpoint } from '../../api/ApiCall';


export const login = (userData) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    return callApiEndpoint(
      '/auth/login',
      'post',
      userData,
      (resp) => {
        dispatch(fetchUserSuccess(resp));
      }
    )
  }
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
