// @flow

import produce from 'immer';
import get from 'lodash/get';
import set from 'lodash/set';
import { handleAction } from 'redux-actions';
import * as actions from './actions';
import type { SetBarbers } from './actions';
import type { BarbersMapper } from './types';

export const initialState: BarbersMapper = {
  list: []
};

export const reducer = handleAction(
  '@barbers/SET_BARBERS',
      ( state: BarbersMapper,
      action: SetBarbers ) => ({
        list: action.payload
      }),
  initialState
);
