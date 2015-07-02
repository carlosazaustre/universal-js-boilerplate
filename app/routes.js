'use strict'

import React from 'react'
import Router from 'react-router'

// -- View React Components ----------------------------------------------------

import App from './views/app'
import Home from './views/home'

// -- Routes Configuration (Shared between Client and Server) ------------------

const routes = (
  <Router.Route path='/' handler={ App }>
    <Router.DefaultRoute name='home' handler={ Home } />
  </Router.Route>
)

export default routes
