import React, {
  Component,
  PropTypes
} from 'react';
import ComponentName from './ComponentName.jsx';

export default class ComponentList extends Component {

  static propTypes = {
    components: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { components: this.props.components };
  }

  boundClick(iterator) {
    console.log(`You clicked ${this.props.components[iterator].title}`);
  }

  render() {
    return (
      <section>
      {
        this.state.components.map((component, iterator) => {
          return (
            <ComponentName key={ component.id }
                           title={ component.title }
                           onClick={ this.boundClick.bind(this, iterator) }/>
          );
        })
      }
      </section>
    );
  }

}

export default ComponentList;
