'use strict';

import React from 'react';
import ComponentName from '../ComponentName';

class ComponentList extends React.Component {

  constructor (props) {
    super(props);
    this.state = { components: this.props.components };
  }

  render () {
    return (
      <section>
      {
        this.state.components.map(component => {
          return (
            <ComponentName key={ component.id } title={ component.title }/>
          );
        })
      }
      </section>
    );
  }

}

export default ComponentList;
