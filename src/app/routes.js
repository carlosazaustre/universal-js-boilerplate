import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// -- View Components
import Index from './containers/Index.jsx';
import CounterList from './containers/CounterList.jsx';
import About from './containers/About.jsx';

const routes = (
  <Route path='/' handler={ Index }>
    <DefaultRoute handler={ CounterList }/>
    <Route path='/components' handler={ CounterList }/>
    <Route path='/about' handler={ About }/>
  </Route>
);

export default routes;
