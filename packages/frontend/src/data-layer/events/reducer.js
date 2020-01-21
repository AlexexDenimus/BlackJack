// @flow

import produce from 'immer';
import { handleAction } from 'redux-actions';
import type { EventType } from './types';
import type { SetEventType } from './actions';
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
    },
  ],
  date: new Date(),
  user: {
    name: '',
    number: '',
  },
};

export const reducer = handleAction(
  actions.setEventType.toString(),
  (state: EventFormState, action: SetEventType) =>
    produce(state, draft => {
      draft.eventType = action.payload;
    }),
  initialState,
);
