// @flow

import type { EventForm } from '../events/types';

export interface IEventsHttpClient {
  +postEvent: (payload: EventForm) => Promise<void>;
}
