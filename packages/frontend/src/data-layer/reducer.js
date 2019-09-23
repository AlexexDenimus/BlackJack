// @flow

import { combineReducers } from 'redux';
import { reducer as barbers } from './barbers/reducer';
import { reducer as counter } from './test/reducer';

export const reducer = combineReducers({
    barbers,
    counter
});
  