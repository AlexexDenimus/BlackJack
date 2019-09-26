// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as rootReducer } from '../data-layer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
