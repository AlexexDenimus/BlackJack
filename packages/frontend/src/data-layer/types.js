// @flow

import type { BarbersMapper } from './barbers/types';
import type { ServicesMapper } from './services/types';

export type ReduxState = {
  form: *,
  barbers: BarbersMapper,
  services: ServicesMapper,
};
