const defaultAuthState = {
  isAuthorized: false,
  isAuthorizing: true,
  name: undefined,
  accessToken: '',
};

export const anonymousAuthState = defaultAuthState;

export const loggedIn = {
  ...defaultAuthState,
  name: 'Test',
  accessToken: 'test-token',
  isAuthorized: true,
  isAuthorizing: false,
};
