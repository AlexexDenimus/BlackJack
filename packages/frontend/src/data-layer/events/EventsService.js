// @flow

import type { IEventsService } from './IEventsService';
import type { IEventsHttpClient } from '../http/IEventsHttpClient';
import type { EventForm } from './types';
import { httpClient } from '../http/HttpApiClient';

export class EventsService implements IEventsService {
  +client: IEventsHttpClient;

  constructor(client: IEventsHttpClient = httpClient) {
    this.client = client;
  }

  createEvent(params: EventForm) {
    return this.client.postEvent(params);
  }

  fetchBookedDates() {
    return this.client.getBookedDates();
  }
}

export const eventsService: IEventsService = new EventsService();
