import React, {
  Component,
  PropTypes,
} from 'react';

class ComponentName extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }
  
  static defaultProps = {
    onClick: () => {},
  }

  constructor (props) {
    super(props);
    this.state = { title: this.props.title };
  }

  render () {
    return (
      <article className='ComponentName' onClick={ this.props.onClick }>
        <h3 className='ComponentName-title'>{ this.state.title }</h3>
      </article>
    );
  }

}

export default ComponentName;
