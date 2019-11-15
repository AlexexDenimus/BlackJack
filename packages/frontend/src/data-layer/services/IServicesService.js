// @flow

import type { ServicesMapper } from './types';

export interface IServicesService {
  +fetchServices: () => Promise<ServicesMapper>;
}
