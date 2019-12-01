import { AuthStateContextType } from '../authContext/AuthContext.types';

import {
  authReducer,
  SET_AUTHORIZED,
  SET_TOKENS,
  START_AUTHORIZING,
  SET_UNAUTHORIZED,
  CLEAR_TOKENS,
} from './authReducer';

describe('Auth reducer', () => {
  const defaultState: AuthStateContextType = {
    isAuthorized: false,
    isAuthorizing: true,
    name: undefined,
    accessToken: '',
  };

  it('throws exception when action is invalid', async () => {
    expect(() => authReducer(defaultState, { type: 'foo' })).toThrowError();
    expect(() => authReducer(defaultState, { type: SET_TOKENS })).toThrowError();
    expect(() => authReducer(defaultState, { type: SET_AUTHORIZED })).toThrowError();
  });

  it('sets isAuthorizing flag as true', async () => {
    expect(
      authReducer(defaultState, {
        type: START_AUTHORIZING,
      }),
    ).toEqual({
      ...defaultState,
      isAuthorizing: true,
    });
  });

  it('sets user as unauthorized', async () => {
    expect(
      authReducer(defaultState, {
        type: SET_UNAUTHORIZED,
      }),
    ).toEqual({
      ...defaultState,
      isAuthorizing: false,
      isAuthorized: false,
    });
  });

  it('sets user as authorized', async () => {
    expect(
      authReducer(defaultState, {
        type: SET_AUTHORIZED,
        decodedToken: {
          userId: 'test-id',
          name: 'test',
        },
      }),
    ).toEqual({
      ...defaultState,
      isAuthorizing: false,
      name: 'test',
      isAuthorized: true,
    });
  });

  it('sets current tokens', async () => {
    expect(
      authReducer(defaultState, {
        type: SET_TOKENS,
        accessToken: 'token',
      }),
    ).toEqual({
      ...defaultState,
      accessToken: 'token',
    });
  });

  it('clears current tokens', async () => {
    expect(
      authReducer(
        {
          ...defaultState,
          accessToken: 'token',
        },
        {
          type: CLEAR_TOKENS,
        },
      ),
    ).toEqual({
      ...defaultState,
      accessToken: '',
    });
  });
});
