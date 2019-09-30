// @flow

import { handleActions } from 'redux-actions';

export type Counter = {
  number: number,
};

const initialState: Counter = {
  number: 20,
};

export const reducer = handleActions(
  {
    '@counter/PLUS_ONE': (state, action) => ({
      number: state.number + 1,
    }),
    '@counter/MINUS_ONE': (state, action) => ({
      number: state.number - 1,
    }),
  },
  initialState,
);
