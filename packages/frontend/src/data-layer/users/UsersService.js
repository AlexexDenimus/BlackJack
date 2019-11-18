// @flow

import type { IUsersService } from './IUsersService';
import type { IUsersHttpClient } from '../http/IUsersHttpClient';
import { httpClient } from '../http/HttpApiClient';

export class UsersService implements IUsersService {
  +client: IUsersHttpClient;

  constructor(client: IUsersHttpClient = httpClient) {
    this.client = client;
  }

  fetchUser(id: string) {
    return this.client.getUser(id);
  }
}

export const userService: IUsersService = new UsersService();
