import { Action } from 'api/types';

export type LoginBody = {
  email: string;
  password: string;
};

export type SignUpBody = {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
};

export const loginAction: (body: LoginBody) => Action = body => ({
  skipAuth: true,
  endpoint: '/users/login',
  method: 'POST',
  body,
});

export const signUpAction: (body: SignUpBody) => Action = body => ({
  skipAuth: true,
  endpoint: '/users/sign-up',
  method: 'POST',
  body,
});
