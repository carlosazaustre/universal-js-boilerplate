import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './containers/App';
import * as containers from './containers';

const {
  CounterPage,
  About
} = containers;

const routes = (
  <Route path='/' handler={ App }>
    <DefaultRoute handler={ CounterPage }/>
    <Route path='/components' handler={ CounterPage }/>
    <Route path='/about' handler={ About }/>
  </Route>
);

export default routes;
