import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Layout from './Layout.jsx';

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
        <nav>
          <ul>
            <li><Link to="/components">Components List</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main role="application">
          <RouteHandler {...this.props}/>
        </main>
      </Layout>
    );
  }

}

export default App;
