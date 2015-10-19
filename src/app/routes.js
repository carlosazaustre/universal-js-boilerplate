import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './containers/App';
import About from './containers/About';

const routes = `
   <Route path='/' handler={ App }>
      <DefaultRoute handler={ App }/>
      <Route path='/counter' handler={ App }/>
      <Route path='/about' handler={ About }/>
   </Route>
`;

export default routes;
