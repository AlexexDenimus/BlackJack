//@flow

export type AuthForm = {
  email: string,
  password: string,
};

export type AuthResponse = {
  token: string,
  userId: string,
};
