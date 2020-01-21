// @flow

import { createAction } from 'redux-actions';
import type { EventType } from './types';
import type { ActionType } from 'redux-actions';

export const setEventType = createAction(
  '@event_form/SET_EVENT_TYPE',
  (eventType: EventType) => eventType,
);

export type SetEventType = ActionType<typeof setEventType>;
