import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from "./rootReducer";
import { loggedIn, loggedOut } from "./middleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, loggedOut, loggedIn))
);

const persistor = persistStore(store);
export { store, persistor };
