import React from 'react';
import ComponentName from './ComponentName.jsx';

class ComponentList extends React.Component {

  constructor (props) {
    super(props);
    this.state = { components: this.props.components };
  }

  boundClick (i) {
    console.log(`You clicked ${this.props.components[i].title}`);
  }

  render () {
    return (
      <section>
      {
        this.state.components.map((component, i) => {
          return (
            <ComponentName key={ i }
                           title={ component.title }
                           onClick={ this.boundClick.bind(this, i) }/>
          );
        })
      }
      </section>
    );
  }

}

export default ComponentList;
