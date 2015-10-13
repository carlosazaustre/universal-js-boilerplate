import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// -- View Components
import App from './containers/App.jsx';
import ComponentList from './containers/ComponentList.jsx';
import About from './containers/About.jsx';

const routes = (
  <Route path='/' handler={ App }>
    <DefaultRoute handler={ ComponentList }/>
    <Route path='/components' handler={ ComponentList }/>
    <Route path='/about' handler={ About }/>
  </Route>
);

export default routes;
