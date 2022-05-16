import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { GetCookie } from "../../auth_setup/Cookie";
import * as actions from "./userTypes";

let token = GetCookie("auth-token");

const initialState = {
  busy: false,

  acctMenuDrop: false,

  user: {},
  error: "",
  token: token,
  // tokenExpirationTime: null,

  loggingIn: false,
  loggedIn: token && token.length > 0,
  loginError: false,

  signupError: false,
  signingUp: false,
  signedUp: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_BUSY:
      return {
        ...state,
        busy: action.payload,
      };
    case actions.SET_ACCT_MENU_DROP:
      return {
        ...state,
        acctMenuDrop: action.payload,
      };
    case actions.FETCH_USER_REQUEST:
      return {
        ...state,
        busy: true,
      };
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        busy: false,
        user: action.payload,
        error: "",
      };
    case actions.FETCH_USER_FAILURE:
      return {
        ...state,
        busy: false,
        user: {},
        error: action.payload,
        fetchUserError: true,
      };
    case actions.SIGNUP_ERROR:
      return {
        ...state,
        signupError: true,
        error: action.payload,
      };
    case actions.SIGNUP_SUCCESSFUL:
      return {
        ...state,
        signupError: false,
        signedUp: true,
        error: "",
      };
    case actions.SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: false,
      };
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: action.payload,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        loggingInError: false,
        error: action.payload,
      };
    case actions.LOGIN_SUCCESSFUL:
      return {
        ...state,
        loggedIn: true,
        loggingInError: false,
        error: "",
        token: action.payload.token,
        user: {
          email: action.payload.email,
        },
      };
    case actions.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    // case actions.SET_TOKEN_EXPIRATION_TIME:
    //   return {
    //     ...state,
    //     tokenExpirationTime: action.payload
    //   }
    case actions.LOGGED_OUT:
      return {
        ...state,
        user: {},
        loggedIn: false,
        token: null,
        // tokenExpirationTime: null,
      };
    case actions.RESET_STATE:
      return {
        initialState,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "user",
  storage: storage,
  blacklist: ["token", "loggedIn"],
};

export default persistReducer(persistConfig, AppReducer);
