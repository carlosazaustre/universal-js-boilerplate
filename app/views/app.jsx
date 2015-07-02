'use strict'

import React    from 'react'
import Router   from 'react-router'
import { Link } from 'react-router'
import Layout   from './Layout'

class App extends React.Component {

  render() {
    return (
      <Layout { ...this.props }>
        <header>
          <h1>Universal JS Boilerplate</h1>
          <Link to='home'>Home</Link>
        </header>
        <Router.RouteHandler { ...this.props } />
      </Layout>
    )
  }
}

export default App
