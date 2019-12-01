import { responseUnauthorizedInterceptor } from './responseUnauthorizedInterceptor';
import { Action } from 'api/types';
import { SET_UNAUTHORIZED } from 'context/auth/authReducer/authReducer';

describe('responseRefreshTokenInterceptor', () => {
  const dispatch = jest.fn();
  const query = jest.fn();
  const client = {
    query,
  };

  it('skips when skipAuth property is true or response status is different than 401', async () => {
    const action: Action = {
      endpoint: '/foo',
      method: 'GET',
      skipAuth: true,
    };

    const response = {
      error: false,
      status: 400,
    };

    const interceptedResponseWithSkipAuth = await responseUnauthorizedInterceptor( dispatch)(client)(
      action,
      response,
    );

    expect(interceptedResponseWithSkipAuth).toEqual(response);

    const interceptedResponse = await responseUnauthorizedInterceptor( dispatch)(client)(
      { ...action, skipAuth: false },
      response,
    );

    expect(interceptedResponse).toEqual(response);
  });

  it('fires unauthorized when response status is 401 or 403', async () => {
    const action: Action = {
      endpoint: '/foo',
      method: 'GET',
    };

    const response = {
      error: false,
      status: 401,
    };

    client.query.mockImplementationOnce(async () => ({
      error: true,
    }));

    const interceptedResponseWithFailedRefreshToken = await responseUnauthorizedInterceptor( dispatch)(
      client,
    )(action, response);

    expect(interceptedResponseWithFailedRefreshToken).toEqual(response);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_UNAUTHORIZED,
    });
  });

});
