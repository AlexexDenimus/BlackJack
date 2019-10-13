// @flow

import type { AuthForm, AuthResponse } from './types';

export interface IAuthService {
  +signUpUser: (payload: AuthForm) => Promise<void>;
  +loginUser: (payload: AuthForm) => Promise<AuthResponse>;
}
