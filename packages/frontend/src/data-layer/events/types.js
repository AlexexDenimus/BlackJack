//@flow

export type EventForm = {
  date: Date,
  services: Array<string>,
  barberId: string,
};

export type EventType = 'fast' | 'default';
