// @flow

import axios from "axios";
import type { Axios } from "axios";
import type { IBarbersHttpClient } from "./IBarbersHttpClient";
import type { BarbersMapper } from "../barbers/types";

export class HttpClient implements IBarbersHttpClient {
  +transport: Axios = axios;

  async getBarbers(): Promise<BarbersMapper> {
    const response: any = await this.transport.get(`/api/barbers`);

    console.log("me")

    const { list } = response.data.barbers;

    return list
  }
}

export const httpClient = new HttpClient();
