// @flow

import { handleAction } from 'redux-actions';
import produce from 'immer';
import type { SetServices } from './actions';
import * as actions from './actions';

type ServicesState = {
  list: [
    {
      id: string,
      price: number,
      name: string,
    },
  ],
};

const initialState = {
  list: [
    {
      id: '0',
      price: '0',
      name: '',
    },
  ],
};

export const reducer = handleAction(
  actions.setServices.toString(),
  (state: ServicesState, action: SetServices) =>
    produce(state, draft => {
      draft.list = action.payload;
    }),
  initialState,
);
