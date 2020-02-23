// @flow

import produce from 'immer';
import { handleAction } from 'redux-actions';
import * as actions from './actions';
import type { CatchError } from './actions';

const initialState = '';

export const reducer = handleAction(
  actions.catchError.toString(),
  (state: string, action: CatchError) =>
    produce(state, draft => {
      return action.payload;
    }),
  initialState,
);
