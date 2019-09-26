// @flow

//import produce from 'immer';
import { handleAction } from 'redux-actions';
//import * as actions from './actions';
import type { SetBarbers } from './actions';
import type { BarbersMapper } from './types';

export const reducer = handleAction(
  '@barbers/SET_BARBERS',
  (state: BarbersMapper, action: SetBarbers) => ({
    list: action.payload,
  }),
  {
    list: [],
  },
);
