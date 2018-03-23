import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./css/global.css";
import configureStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";

const _store = configureStore();
ReactDOM.render(
  <Provider store={_store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
