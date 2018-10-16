import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "Root";
import App from "components/App";
import Home from "components/Home";
import SignUp from "./components/auth/SignUp";
import Feature from "./components/Feature";

import "./styles/styles.css";
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
