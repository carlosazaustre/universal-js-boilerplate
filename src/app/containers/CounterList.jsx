import React from 'react';
import Counter from './../components/Counter.jsx';

export default class CounterList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { components: this.props.components };
  };

  render() {
    return (
      <section>
      {
        this.state.components.map((component, iterator) => {
          return (
            <Counter key={ component.id }
                     title={ component.title }
            />
          );
        })
      }
      </section>
    );
  }

}

export default CounterList;
