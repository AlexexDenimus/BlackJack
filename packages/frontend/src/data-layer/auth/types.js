//@flow

export type AuthForm = {
  email: string,
  password: string,
  publicId?: string,
  registrationType?: string,
};

export type AuthResponse = {
  token: string,
  userId: string,
};
