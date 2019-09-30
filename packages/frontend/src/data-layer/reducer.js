// @flow

import { combineReducers } from 'redux';
import { reducer as barbers } from './barbers/reducer';
import { reducer as counter } from './test/reducer';
import type { Counter } from './test/reducer';
import type { BarbersMapper } from './barbers/types';

export type RootState = {
  barbers: BarbersMapper,
  counter: Counter,
};

export const reducer = combineReducers({
  barbers,
  counter,
});
