import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Posts from "./components/Posts";
import Card from "./components/Card";

function App(props) {
  const { history } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact history={history} path="/posts" component={Posts} />
        <Route exact path="/:id" children={Card} />
        <Redirect from="/" to="/posts/" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
