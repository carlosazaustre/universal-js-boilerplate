import React, {
  Component,
  PropTypes
} from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: () => {}
};

function getInitialState() {
  return {
    counter: 0
  };
}

function counterClick() {
  this.setState({
    counter: this.state.counter + 1
  });
}

export default class ComponentName extends Component {

  constructor(props) {
    super(props);
    this.state = { title: this.props.title, counter: this.state.counter };
  }

  render() {
    return (
      <article className='ComponentName' onClick={ this.counterClick }>
        <h3 className='ComponentName-title'>{ this.state.title }</h3>
        <span>{ this.state.counter }</span>
      </article>
    );
  }

}

export default ComponentName;
