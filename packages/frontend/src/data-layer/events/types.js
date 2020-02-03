//@flow

export type EventForm = {
  date: Date,
  services: Array<string>,
  barberId: string,
  user: { id: string } | { name: string, phoneNumber: string },
  notification: boolean,
};

export type EventType = 'fast' | 'default';

export type BookedDates = [{ _id: Date }];
