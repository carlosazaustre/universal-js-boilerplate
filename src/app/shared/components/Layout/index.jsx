import React from 'react';

class Layout extends React.Component {

  render () {
    return (
      <html lang='es'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{ this.props.title }</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </head>
        <body>
          { this.props.children }
          <script src='/index.js'></script>
        </body>
      </html>
    );
  }
}

export default Layout;
