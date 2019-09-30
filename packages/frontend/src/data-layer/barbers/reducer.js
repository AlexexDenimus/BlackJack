// @flow

//import produce from 'immer';
import { handleAction } from 'redux-actions';
//import * as actions from './actions';
import type { SetBarbers } from './actions';

type BarbersState = {
  list: [{ id: string, picture: string, name: string, description: string }],
};

const initialState: BarbersState = {
  list: [{ id: '0', picture: '', name: '', description: '' }],
};

export const reducer = handleAction(
  '@barbers/SET_BARBERS',
  (state: BarbersState, action: SetBarbers) => ({
    list: action.payload,
  }),
  initialState,
);
