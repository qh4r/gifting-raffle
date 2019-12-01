import React from 'react';
import cookies from 'js-cookie';

import { AuthStateContext } from '../authContext/AuthContext';
import { Token } from '../authReducer/authReducer.types';

import { render } from 'test';
import { AuthContextController } from './AuthContextController';

const mockToken: Token = {
  userId: 'test-id',
  name: 'test-name',
};

jest.mock('jwt-decode', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((token: string) => (token === 'bad' ? { ...mockToken, exp: 0 } : mockToken)),
}));

describe('AuthContextController component', () => {
  it('decodes token and returns proper user data', () => {
    const children = jest.fn();

    cookies.get = jest.fn().mockImplementationOnce(() => 'token');

    render(
      <AuthContextController>
        <AuthStateContext.Consumer>{children}</AuthStateContext.Consumer>
      </AuthContextController>,
    );

    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        accessToken: 'token',
        isAuthorized: false,
        isAuthorizing: true,
        name: undefined,
      }),
    );

    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        accessToken: 'token',
        isAuthorized: true,
        isAuthorizing: false,
        name: 'test-name',
      }),
    );
  });
});
