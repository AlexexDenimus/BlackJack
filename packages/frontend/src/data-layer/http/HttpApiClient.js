// @flow

import axios from 'axios';
import type { Axios } from 'axios';
import type { IBarbersHttpClient } from './IBarbersHttpClient';
import type { IAuthHttpClient } from './IAuthHttpClient';
import type { IServicesHttpClient } from './IServicesHttpClient';
import type { IUsersHttpClient } from './IUsersHttpClient';
import type { IEventsHttpClient } from './IEventsHttpClient';
import type { BarbersMapper } from '../barbers/types';
import type { ServicesMapper } from '../services/types';
import type { UserDto } from '../users/types';
import type { EventForm } from '../events/types';
import type { AuthForm, AuthResponse } from '../auth/types';

export class HttpClient
  implements
    IBarbersHttpClient,
    IAuthHttpClient,
    IServicesHttpClient,
    IUsersHttpClient,
    IEventsHttpClient {
  +transport: Axios = axios;

  async getBarbers(): Promise<BarbersMapper> {
    const response: any = await this.transport.get(`/api/barbers`);

    const { barbers } = response.data;

    return barbers;
  }

  async getServices(): Promise<ServicesMapper> {
    const response: any = await this.transport.get(`api/services`);

    const { services } = response.data;

    return services;
  }

  async signUpUser(payload: AuthForm): Promise<void> {
    const { email, password, registrationType, publicId } = payload;

    const args = registrationType
      ? {
          email,
          password,
          registrationType,
          publicId,
        }
      : {
          email,
          password,
        };

    await this.transport.post('/api/users', args);

    return;
  }

  async loginUser(payload: AuthForm): Promise<AuthResponse> {
    const { email, password } = payload;
    const response: any = await this.transport.post(`/api/auth/login`, { email, password });
    const userInfo = response.data;

    return userInfo;
  }

  async getUser(id: string): Promise<UserDto> {
    const response: any = await this.transport.get(`/api/users/${id}`);

    return response.data;
  }

  async postEvent(payload: EventForm): Promise<void> {
    const { date, serviceId, barberId } = payload;

    await this.transport.post('/api/events', { date, serviceId, barberId });

    return;
  }
}

export const httpClient = new HttpClient();
