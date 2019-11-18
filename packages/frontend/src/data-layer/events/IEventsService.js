// @flow

import type { EventForm } from './types';

export interface IEventsService {
  +createEvent: (payload: EventForm) => Promise<void>;
}
