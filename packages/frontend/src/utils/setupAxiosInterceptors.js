// @flow

import set from 'lodash/set';
import axios from 'axios';
import type { $AxiosXHRConfig } from 'axios';

axios.interceptors.request.use(
  (config: $AxiosXHRConfig<*>): $AxiosXHRConfig<*> => {
    const isToken = document.cookie.includes('token=');
    if (!isToken) {
      return config;
    }
    const accessToken = document.cookie.split('token=')[1].split(';')[0];
    if (!accessToken) {
      return config;
    }

    return set(config, 'headers.authorization', `Bearer ${accessToken}`);
  },
  (error: any): Promise<any> => Promise.reject(error),
);

export default axios;
