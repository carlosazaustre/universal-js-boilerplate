'use strict';

import React from 'react';

class ComponentForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = { title: 'Hola Muchacho' };
  }

  onSave (e) {
    e.preventDefault();
    console.log('Hellow');
  }

  render () {
    return (
      <form onSubmit={ this.onSave }>
        <input type='text' ref='title' name='title' value={ this.state.title }/>
        <button type='button' onClick={ this.onSave }>Save</button>
      </form>
    );
  }

}

export default ComponentForm;
