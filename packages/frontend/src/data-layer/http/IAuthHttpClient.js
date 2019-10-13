// @flow

import type { AuthForm, AuthResponse } from '../auth/types';

export interface IAuthHttpClient {
  +signUpUser: (payload: AuthForm) => Promise<void>;
  +loginUser: (payload: AuthForm) => Promise<AuthResponse>;
}
