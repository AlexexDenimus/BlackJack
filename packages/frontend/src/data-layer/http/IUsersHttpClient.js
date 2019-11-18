// @flow

import type { UserDto } from '../users/types';

export interface IUsersHttpClient {
  +getUser: (id: string) => Promise<UserDto>;
}
