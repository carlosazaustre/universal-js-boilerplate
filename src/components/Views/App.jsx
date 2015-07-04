'use strict';

import React from 'react';
import Layout from './Layout';
import ComponentName from '../ComponentName/ComponentName';
import ComponentForm from '../ComponentForm/ComponentForm';

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
        <section>
          {
            this.state.components.map(component => {
              return (
                <ComponentName key={ component.id } title={ component.title }/>
              );
            })
          }
          <ComponentForm />
        </section>
      </Layout>
    );
  }

}

export default App;
