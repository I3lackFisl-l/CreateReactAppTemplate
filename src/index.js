import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
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
