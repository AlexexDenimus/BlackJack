// @flow

import produce from 'immer';
import get from 'lodash/get';
import set from 'lodash/set';
import { handleActions } from 'redux-actions';
import * as actions from './actions';
import type { PlusOne, MinusOne } from './actions';

type Counter = {
    number: number
}

const initialState: Counter = {
    number: 20
};

export const reducer = handleActions(
  {
    '@counter/PLUS_ONE':
    (state, action) => ({
      number: state.number + 1
    }),
    '@counter/MINUS_ONE':
    (state, action) => ({
      number: state.number - 1
    })
  },
  initialState
)
  