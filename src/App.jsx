import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import CharactersList from "./components/CharactersList";
import CharacterInfo from "./components/CharacterInfo";

import "./App.scss";

function App(props) {
  const { history } = props;
  return (
    <Switch>
      <Route exact history={history} path="/" component={CharactersList} />
      <Route exact path="/:id" component={CharacterInfo} />
    </Switch>
  );
}

export default withRouter(App);
