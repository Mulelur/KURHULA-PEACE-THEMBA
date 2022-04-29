import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
