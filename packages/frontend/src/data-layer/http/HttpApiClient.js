// @flow

import axios from 'axios';
import type { Axios } from 'axios';
import type { IBarbersHttpClient } from './IBarbersHttpClient';
import type { IAuthHttpClient } from './IAuthHttpClient';
import type { BarbersMapper } from '../barbers/types';
import type { AuthForm, AuthResponse } from '../auth/types';

export class HttpClient implements IBarbersHttpClient, IAuthHttpClient {
  +transport: Axios = axios;

  async getBarbers(): Promise<BarbersMapper> {
    const response: any = await this.transport.get(`/api/barbers`);

    const { barbers } = response.data;

    return barbers;
  }

  async signUpUser(payload: AuthForm): Promise<void> {
    const { email, password } = payload;
    await this.transport.post('/api/users', {
      email,
      password,
    });

    return;
  }

  async loginUser(payload: AuthForm): Promise<AuthResponse> {
    const { email, password } = payload;
    const response: any = await this.transport.post(`/api/auth/login`, { email, password });
    const userInfo = response.data;

    return userInfo;
  }
}

export const httpClient = new HttpClient();
