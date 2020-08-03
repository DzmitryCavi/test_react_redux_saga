import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./store/sagas/sagas.js";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { Reducers } from "./store/rootReducer";

const saga = createSagaMiddleware();

const history = createBrowserHistory();

const store = createStore(Reducers, compose(applyMiddleware(thunk, saga)));

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

render(app, document.getElementById("root"));

serviceWorker.unregister();
