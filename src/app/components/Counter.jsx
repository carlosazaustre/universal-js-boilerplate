import React, { PropTypes } from 'react';

export default class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: this.props.title };
  }

  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <article className='Counter'>
        <h3 className='Counter-title'>{ this.state.title }</h3>
          <p>
            <span> Clicked: {counter} times</span>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </p>
      </article>
    );
  }

}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
