'use strict';

import React from 'react';
import Router from 'react-router';

// -- View Components
import App from './components/App';
import About from './components/About';

const routes = (
  <Router.Route path='/' handler={ App }>
    <Router.DefaultRoute name='about' handler={ About }/>
  </Router.Route>
);

export default routes;
