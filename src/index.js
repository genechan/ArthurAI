import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());
var mountNode = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  mountNode
);
