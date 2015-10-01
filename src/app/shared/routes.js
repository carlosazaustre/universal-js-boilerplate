import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// -- View Components
import App from './components/App.jsx';
import ComponentList from './components/ComponentList.jsx';
import About from './components/About.jsx';

const routes = (
  <Route path='/' handler={ App }>
    <DefaultRoute handler={ ComponentList }/>
    <Route path='/components' handler={ ComponentList }/>
    <Route path="/about" handler={ About }/>
  </Route>
);

export default routes;
