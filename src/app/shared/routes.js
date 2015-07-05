'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// -- View Components
import App from './components/App';
import ComponentList from './components/ComponentList';
import About from './components/About';

const routes = (
  <Route path='/' handler={ App }>
    <DefaultRoute handler={ ComponentList }/>
    <Route path='/components' handler={ ComponentList }/>
    <Route path="/about" handler={ About }/>
  </Route>
);

export default routes;
