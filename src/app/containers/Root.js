/* global __DEVTOOLS__ */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, PropTypes as RouterPropTypes } from 'react-router';
import configureStore from '../stores/configureStore';
import routes from '../routes';

const store = configureStore();

if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
  const createDevToolsWindow = require('../utils/createDevToolsWindow');
  createDevToolsWindow(store);
}

export default class Root extends Component {

  static propTypes = {
    history: RouterPropTypes.history.isRequired
  };

  render() {
    return (
      <Provider store={store} key='provider'>
        <Router history={this.props.history} children={routes} />
      </Provider>
    );
  }
}
