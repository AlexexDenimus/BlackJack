// @flow

import axios from 'axios';
import type { Axios } from 'axios';
import type { IBarbersHttpClient } from './IBarbersHttpClient';
import type { BarbersMapper } from '../barbers/types';

export class HttpClient implements IBarbersHttpClient {
  +transport: Axios = axios;

  async getBarbers(): Promise<BarbersMapper> {
    const response: any = await this.transport.get(`/api/barbers`);

    const { barbers } = response.data;

    return barbers;
  }
}

export const httpClient = new HttpClient();
