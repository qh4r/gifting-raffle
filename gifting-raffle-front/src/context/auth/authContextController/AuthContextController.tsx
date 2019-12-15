import React, { useReducer, useEffect } from 'react';
import cookies from 'js-cookie';
import decode from 'jwt-decode';

import { AuthDispatchContext, AuthStateContext } from '../authContext/AuthContext';
import { authReducer, SET_AUTHORIZED, SET_UNAUTHORIZED } from '../authReducer/authReducer';

import { AuthContextControllerProps } from './AuthContextController.types';
import { Token } from "../authReducer/authReducer.types";

export const AuthContextController: React.FC<AuthContextControllerProps> = ({ children }) => {
  const [ state, dispatch ] = useReducer(authReducer, {
    isAuthorized: false,
    isAuthorizing: true,
    name: undefined,
    accessToken: String(cookies.get('accessToken')),
  });

  useEffect(() => {
    try {
      cookies.set('accessToken', state.accessToken);

      const decodedToken = decode<Token>(state.accessToken);
      return dispatch({
        type: SET_AUTHORIZED,
        decodedToken,
      });

      throw new Error('User is unauthorized');
    } catch (error) {
      return dispatch({
        type: SET_UNAUTHORIZED,
      });
    }
  }, [ state.accessToken, ]);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
