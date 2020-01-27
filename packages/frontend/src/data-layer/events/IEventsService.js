// @flow

import type { EventForm, BookedDates } from './types';

export interface IEventsService {
  +createEvent: (payload: EventForm) => Promise<void>;
  +fetchBookedDates: () => Promise<BookedDates>;
}
