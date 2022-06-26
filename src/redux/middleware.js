import { callApiEndpoint } from "../api/ApiCall";
import { SetCookie } from "../auth_setup/Cookie";
import * as actions from "./user/userTypes";

export const loggedIn =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === actions.LOGIN_SUCCESSFUL) {
      // Set token cookie
      SetCookie(
        "auth-token",
        action.payload.token,
        "/",
        new Date(new Date().getTime() + 1000 * 60 * 60)
      );
      //   if (!action.payload.) {
      //     window.location.href = "/create-profile";
      //   } else {
      //     dispatch(makeFetchProfileAction());
      //   }
    }

    return next(action);
  };

export const loggedOut =
  ({getState, dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === actions.LOGGED_OUT) {
      callApiEndpoint(
        "auth/signout",
        "post",
        {token: getState().user.token},
        (res) => {
          // Clear token cookie
          SetCookie("auth-token", "", "/", null);

          localStorage.removeItem("persist:user");
          dispatch({ type: actions.RESET_STATE });
        },
        (error) => {
          dispatch({ type: actions.SET_ERROR, payload: error });
        }
      );
    }

    return next(action);
  };
