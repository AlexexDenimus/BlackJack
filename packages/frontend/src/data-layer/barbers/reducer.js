// @flow

import produce from 'immer';
import { handleAction } from 'redux-actions';
import * as actions from './actions';
import type { SetBarbers } from './actions';

type BarbersState = {
  list: [
    {
      id: string,
      picture: { src: string, alt: string, mimetype: string },
      name: string,
      description: string,
    },
  ],
};

const initialState: BarbersState = {
  list: [{ id: '0', picture: { src: '', alt: '', mimetype: '' }, name: '', description: '' }],
};

export const reducer = handleAction(
  actions.setBarbers.toString(),
  (state: BarbersState, action: SetBarbers) =>
    produce(state, draft => {
      draft.list = action.payload;
    }),
  initialState,
);
