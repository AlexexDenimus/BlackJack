// @flow

import { createAction } from 'redux-actions';
import type { ActionType } from 'redux-actions';
import type { EventType } from './types';

export const setEventType = createAction(
  '@event_form/SET_EVENT_TYPE',
  (eventType: EventType) => eventType,
);

export type SetEventType = ActionType<typeof setEventType>;

export const setBarber = createAction(
  '@event_form/SET_BARBER',
  (barber: { id: string, name: string, src: string }) => barber,
);

export type SetBarber = ActionType<typeof setBarber>;

export const setServices = createAction(
  '@event_form/SET_SERVICES',
  (
    services: [
      {
        id: string,
        name: string,
        price: number,
      },
    ],
  ) => services,
);

export type SetServices = ActionType<typeof setServices>;
