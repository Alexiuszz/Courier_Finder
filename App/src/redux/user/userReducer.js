import * as actions from './userTypes'

const initialState = {
  loggingIn: false,
  loggedIn: false,

  signingUp: false,
  signedIn: false,

  user: {},
  error: '',
  token: null,
  tokenExpirationTime: null,
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: ''
      }
    case actions.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.payload,
        fetchUserError: true
      }
    case actions.SIGNUP_ERROR:
      return {
        ...state,
        signUpError: true,
        error: actions.payload
      }
    case actions.SIGNUP_SUCCESSFUL:
      return {
        ...state,
        error: ''
      }
    case actions.SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: false
      }
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: false
      }
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        loggingInError: true,
        error: actions.payload
      }
    case actions.LOGIN_SUCCESSFUL:
      return {
        ...state,
        loggedIn: true,
        loggingInError: false,
        error: ''
      }
    case actions.SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case actions.SET_TOKEN_EXPIRATION_TIME:
      return {
        ...state,
        tokenExpirationTime: action.payload
      }
    default: return state
  }
}

export default AppReducer;
