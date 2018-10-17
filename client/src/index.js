import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "Root";
import App from "components/App";
import Home from "components/Home";
import SignUp from "./components/auth/SignUp";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

import "./styles/styles.css";
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
