import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router';
import configureStore from './store/configureStore';
import App from './containers/App';

import routes from './routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <App/>
    <nav>
      <ul>
        <li><Link to='/components'>Components List</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  </Provider>,
  rootElement
);
