'use strict'

import React from 'react'

class Layout extends React.Component {
  render() {
    return (
      <html lang='es'>
        <head>
          <meta charSet='utf-8' />
          <title>Universal JS Boilerplate</title>
          <meta name='viewport' content='width=device-width, inital-scale=1.0' />
          <link rel='stylesheet' href='/assets/css/app.css' />
        </head>
        <body>
          <main role='application' id='app'>
            { this.props.children }
          </main>
        </body>
      </html>
    )
  }
}

export default Layout
