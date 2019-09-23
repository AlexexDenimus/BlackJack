// @flow

import type { BarbersMapper } from './types';

export interface IBarbersService {
    +fetchBarbers: () => Promise<BarbersMapper>;
}
  