// @flow

import type { EventForm, BookedDates } from '../events/types';

export interface IEventsHttpClient {
  +postEvent: (payload: EventForm) => Promise<void>;
  +getBookedDates: () => Promise<BookedDates>;
}
