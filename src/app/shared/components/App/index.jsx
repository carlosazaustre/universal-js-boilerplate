'use strict';

import React from 'react';
import Router from 'react-router';
import Layout from '../Layout';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = { components: this.props.components };
  }

  render () {
    return (
      <Layout {...this.props }>
        <header>
          <h1>{ this.props.title }</h1>
        </header>
        <main role="application">
          <Router.RouteHandler {...this.props} />
        </main>
      </Layout>
    );
  }

}

export default App;
