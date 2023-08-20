import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "./app/store/createStore";
import history from "./app/utils/history";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore();
root.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);
