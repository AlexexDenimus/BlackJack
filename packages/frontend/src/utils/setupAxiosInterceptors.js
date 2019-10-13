// @flow

import set from 'lodash/set';
import axios from 'axios';
import type { $AxiosXHRConfig } from 'axios';

axios.interceptors.request.use(
  (config: $AxiosXHRConfig<*>): $AxiosXHRConfig<*> => {
    const accessToken = document.cookie.split('token=')[1].split(';')[0];
    if (accessToken) {
      return set(config, 'headers.authorization', `Bearer ${accessToken}`);
    }

    return config;
  },
  (error: any): Promise<any> => Promise.reject(error),
);

export default axios;
