import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

class CounterApp extends Component {

  constructor(props) {
    super(props);
    this.state = { components: this.props.components };
  }

  render() {
    const { counter, dispatch } = this.props;
    return (
      this.state.components.map((component, iterator) => {
        return (
          <Counter key={ component.id }
                   title={ component.title }
                   counter={counter}
                   {...bindActionCreators(CounterActions, dispatch)}
          />
        );
      })
    );
  }
}

function select(state) {
  return {
    counter: state.counter
  };
}

export default connect(select)(CounterApp);
