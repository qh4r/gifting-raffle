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

export const createLoginAction: (body: LoginBody) => Action = body => ({
  skipAuth: true,
  endpoint: '/users/login',
  method: 'POST',
  body,
});

export const createSignUpAction: (body: SignUpBody) => Action = body => ({
  skipAuth: true,
  endpoint: '/users/sign-up',
  method: 'POST',
  body,
});
