// @flow

import type { BarbersMapper } from './barbers/types';

export type ReduxState = {
    form: *,
    barbers: BarbersMapper
}