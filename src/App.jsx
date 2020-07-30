import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import CharactersList from "./components/CharactersList";
import CharacterInfo from "./components/CharacterInfo";

import "./App.scss";

function App(props) {
  const { history } = props;
  return (
    <Switch>
      <Route exact history={history} path="/posts" component={CharactersList} />
      <Route exact path="/posts/:id" component={CharacterInfo} />
      <Redirect from="/" to="/posts/" />
    </Switch>
  );
}

export default withRouter(App);
