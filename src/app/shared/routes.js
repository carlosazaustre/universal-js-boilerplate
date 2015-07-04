'use strict';

import React from 'react';
import Router from 'react-router';

// -- View Components
import App from './components/App';
import ComponentList from './components/ComponentList';

const routes = (
  <Router.Route path='/' handler={ App }>
    <Router.DefaultRoute name='component-list' handler={ ComponentList }/>
  </Router.Route>
);

export default routes;
