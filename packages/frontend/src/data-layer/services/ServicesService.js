// @flow

import type { IServicesService } from './IServicesService';
import type { IServicesHttpClient } from '../http/IServicesHttpClient';
import { httpClient } from '../http/HttpApiClient';

export class ServicesService implements IServicesService {
  +client: IServicesHttpClient;

  constructor(client: IServicesHttpClient = httpClient) {
    this.client = client;
  }

  fetchServices() {
    return this.client.getServices();
  }
}

export const servicesService: IServicesService = new ServicesService();
