// @flow

import type { IBarbersService } from './IBarbersService';
import type { IBarbersHttpClient } from '../http/IBarbersHttpClient';
import { httpClient } from '../http/HttpApiClient';

export class BarbersService implements IBarbersService {
    +client: IBarbersHttpClient;
  
    constructor(client: IBarbersHttpClient = httpClient) {
      this.client = client;
    }
  
    fetchBarbers() {
      return this.client.getBarbers();
    }
}

export const barbersService: IBarbersService = new BarbersService();