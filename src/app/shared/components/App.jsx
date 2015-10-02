import React, {
  Component,
  PropTypes,
} from 'react';
import { RouteHandler, Link } from 'react-router';
import Layout from './Layout.jsx';

class App extends Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

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
