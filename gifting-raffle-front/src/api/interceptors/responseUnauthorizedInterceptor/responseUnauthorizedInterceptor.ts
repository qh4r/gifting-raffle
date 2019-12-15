import { Dispatch } from 'react';
import { QueryResponse, ResponseInterceptor } from 'react-fetching-library';

import { Action } from 'context/auth/authReducer/authReducer.types';
import { Action as ApiAction } from 'api/types';
import { SET_UNAUTHORIZED } from 'context/auth/authReducer/authReducer';

export const responseUnauthorizedInterceptor: (
  dispatch: Dispatch<Action>,
) => ResponseInterceptor = dispatch => client => async (action: ApiAction, response: QueryResponse<object>) => {
  if (action.skipAuth) {
    return response;
  }

  if (response.status === 401 || response.status === 403) {
    dispatch({
      type: SET_UNAUTHORIZED,
    });
  }

  return response;
};
