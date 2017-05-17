/**
 * Create the store
 */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import ui from './modules/ui';

export default function configureStore() {
  const reducer = combineReducers({
    ui,
  });

  const enhancers = [applyMiddleware(thunk), autoRehydrate()];

  if (process.env.NODE_ENV !== 'production') {
    const devtools = window.devToolsExtension || (() => noop => noop);
    enhancers.push(devtools());
  }

  const store = createStore(reducer, {}, compose(...enhancers));

  return store;
}
