'use strict'

import React from 'react'
import Router from 'react-router'
import Layout from './Layout'

class App extends React.Component {
  render() {
    return (
      <Layout { ...this.props }>
        <Router.RouteHandler { ...this.props } />
      </Layout>
    )
  }
}

export default App
