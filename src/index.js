import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {store, persistor} from "./redux/store";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
