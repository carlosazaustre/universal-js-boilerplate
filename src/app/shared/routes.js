'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// -- View Components
import App from './components/App';
import ComponentList from './components/ComponentList';
import About from './components/About';

const routes = (
  <Route path='/' handler={ App }>
    <DefaultRoute name='main' handler={ ComponentList }/>
    <Route name='components' handler={ ComponentList }/>
    <Route name="about" handler={ About }/>
  </Route>
);

export default routes;
