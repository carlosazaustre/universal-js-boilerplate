'use strict';

import React from 'react';
import Layout from './Layout';

class About extends React.Component {
  render () {
    return (
      <Layout {...this.props}>
        <header>
          <h1>{ this.props.title }</h1>
        </header>
        <section>
          <h3>About view</h3>
        </section>
      </Layout>
    );
  }
}

export default About;
