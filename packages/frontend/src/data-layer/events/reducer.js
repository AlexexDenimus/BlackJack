// @flow

import produce from 'immer';
import { handleActions } from 'redux-actions';
import type { EventType } from './types';
import type { SetEventType } from './actions';
import type { SetBarber } from './actions';
import type { SetServices } from './actions';
import type { SetDate } from './actions';
import * as actions from './actions';

export type EventFormState = {
  eventType: EventType,
  barber: {
    id: string,
    name: string,
    img: string,
  },
  services: [
    {
      id: string,
      name: string,
      price: number,
    },
  ],
  date: Date,
  user: {
    name: string,
    number: string,
  },
};

const initialState: EventFormState = {
  eventType: 'default',
  barber: {
    id: '',
    name: '',
    img: '',
  },
  services: [
    {
      id: '',
      name: '',
      price: 0,
    },
  ],
  date: new Date(),
  user: {
    name: '',
    number: '',
  },
};

export const reducer = handleActions(
  {
    [actions.setEventType.toString()]: (state: EventFormState, action: SetEventType) =>
      produce(state, draft => {
        draft.eventType = action.payload;
      }),
    [actions.setBarber.toString()]: (state: EventFormState, action: SetBarber) =>
      produce(state, draft => {
        draft.barber = action.payload;
      }),
    [actions.setServices.toString()]: (state: EventFormState, action: SetServices) =>
      produce(state, draft => {
        draft.services = action.payload;
      }),
    [actions.setDate.toString()]: (state: EventFormState, action: SetDate) =>
      produce(state, draft => {
        draft.date = action.payload;
      }),
  },
  initialState,
);
