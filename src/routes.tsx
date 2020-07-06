import React from "react";

import { Router } from "react-router";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import history from "./utils/history";

import Layout from "./components/Layout";
import Login from "./pages/Login";

interface Props {}

const Routes: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Layout} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
