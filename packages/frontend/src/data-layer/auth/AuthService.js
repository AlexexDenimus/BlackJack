// @flow

import type { IAuthService } from './IAuthService';
import type { IAuthHttpClient } from '../http/IAuthHttpClient';
import type { AuthForm } from '../auth/types';
import { httpClient } from '../http/HttpApiClient';

export class AuthService implements IAuthService {
  +client: IAuthHttpClient;

  constructor(client: IAuthHttpClient = httpClient) {
    this.client = client;
  }

  signUpUser(params: AuthForm) {
    return this.client.signUpUser(params);
  }

  loginUser(params: AuthForm) {
    return this.client.loginUser(params);
  }
}

export const authService: IAuthService = new AuthService();
