import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux'
import {Redusers} from './store/redusers'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './store/sagas.js';
import thunk from 'redux-thunk'

const saga = createSagaMiddleware()

const store = createStore(Redusers, compose(
  applyMiddleware(thunk, saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
