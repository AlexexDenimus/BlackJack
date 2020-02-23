// @flow

import { createAction } from 'redux-actions';
import type { ActionType } from 'redux-actions';
import { barbersService } from './BarbersService';
import { catchError } from '../errors/actions';
import type { BarbersMapper } from './types';
import type { ReduxState } from '../types';
import type { ThunkAction } from 'redux-thunk';

export const setBarbers = createAction('@barbers/SET_BARBERS', (barbers: BarbersMapper) => barbers);

export type SetBarbers = ActionType<typeof setBarbers>;

export const fetchBarbersAsync = (): ThunkAction<void, ReduxState> => async dispatch => {
  try {
    const response = await barbersService.fetchBarbers();

    dispatch(setBarbers(response));
  } catch (error) {
    dispatch(catchError(error.message));
  }
};
