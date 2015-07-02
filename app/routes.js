'use strict'

import React from 'react'
import Router from 'react-router'

// -- Components ---------------------------------------------------------------

import Home from './views/home'
import App from './views/app'

// -- Routes Configuration -----------------------------------------------------

const routes = (
  <Router.Route path='/' handler={ App }>
    <Router.DefaultRoute name='home' handler={ Home } />
  </Router.Route>
)

export default routes
