// @flow

import type { ServicesMapper } from '../services/types';

export interface IServicesHttpClient {
  +getServices: () => Promise<ServicesMapper>;
}
