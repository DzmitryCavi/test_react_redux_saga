import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import CharactersList from "./components/CharacterList/CharactersList";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";

import "./App.scss";

function App(props) {
  const { history } = props;
  return (
    <Switch>
      <Route exact history={history} path="/list" component={CharactersList} />
      <Route exact path="/list/:id" component={CharacterInfo} />
      <Redirect from="/" to="/list" />
    </Switch>
  );
}

export default withRouter(App);
