// @flow

import { createAction } from 'redux-actions';
import type { ActionType } from 'redux-actions';
import type { ThunkAction } from 'redux-thunk';
import type { ReduxState } from '../types';

export const plusOne = createAction(
    '@counter/PLUS_ONE'
);

export type PlusOne = ActionType<typeof plusOne>;

export const minusOne = createAction(
    '@counter/MINUS_ONE'
);

export type MinusOne = ActionType<typeof minusOne>;

export const counterFailure = createAction(
    '@counter/ERROR',
    (error: Error) => error
  );
  
export type CounterFailure = ActionType<typeof counterFailure>;

export const plusOneAsync = (): ThunkAction<void, ReduxState> => async dispatch => {
    try {
        console.log('here')
      dispatch(plusOne());
    } catch (error) {
      dispatch(counterFailure(error));
    }
  };

export function minusOneAsync() {
  return (dispatch) => {
    try {
      console.log('here')
    dispatch(minusOne());
  } catch (error) {
    dispatch(counterFailure(error));
  }
  }
}