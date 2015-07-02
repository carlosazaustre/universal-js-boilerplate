'use strict'

import React    from 'react'
import { Link } from 'react-router'

class Home extends React.Component {

  render() {
    return (
      <header>
        <h1>Universal JS Boilerplate</h1>
        <Link to='home'>Home</Link>
      </header>
    )
  }
}

export default Home
