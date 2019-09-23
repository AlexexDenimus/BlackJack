// @flow

import type { BarbersMapper } from '../barbers/types';

export interface IBarbersHttpClient {
    +getBarbers: () => Promise<BarbersMapper>;
}