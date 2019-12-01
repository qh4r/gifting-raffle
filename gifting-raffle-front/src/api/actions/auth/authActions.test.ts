import { loginAction, signUpAction } from './authActions';

describe('Auth actions', () => {
  it('creates login action', () => {
    const login = loginAction({ email: 'mail@mail.com', password: 'test' });

    expect(login.endpoint).toEqual('/users/login');
    expect(login.body).toEqual({ email: 'mail@mail.com', password: 'test' });
  });

  it('creates sign up action', () => {
    const signUp = signUpAction({
      email: 'mail@mail.com',
      name: 'Test',
      password: 'asdasd',
      repeatPassword: 'asdasd',
    });

    expect(signUp.endpoint).toEqual('/users/sign-up');
    expect(signUp.body).toEqual({
      email: 'mail@mail.com',
      name: 'Test',
      password: 'asdasd',
      repeatPassword: 'asdasd',
    });
  });
});
