// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as barbers } from './barbers/reducer';
import { reducer as counter } from './test/reducer';
import { reducer as services } from './services/reducer';
import { reducer as eventForm } from './events/reducer';
import { reducer as error } from './errors/reducer';
import type { Counter } from './test/reducer';
import type { BarbersMapper } from './barbers/types';
import type { ServicesMapper } from './services/types';
import type { EventFormState } from './events/reducer';

export type RootState = {
  barbers: BarbersMapper,
  services: ServicesMapper,
  counter: Counter,
  eventForm: EventFormState,
  error: string,
  form: *,
};

export const reducer = combineReducers({
  barbers,
  services,
  counter,
  eventForm,
  error,
  form,
});
