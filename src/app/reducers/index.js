import { combineReducers } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import counter from './counter';
import routes from '../routes';

const rootReducer = combineReducers({
  counter,
  router: routerStateReducer
});

export default rootReducer;
