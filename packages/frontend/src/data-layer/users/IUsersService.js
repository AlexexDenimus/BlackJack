// @flow

import type { UserDto } from './types';

export interface IUsersService {
  +fetchUser: (id: string) => Promise<UserDto>;
}
