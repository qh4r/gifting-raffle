import React, { useMemo } from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';

import { ClientProviderProps } from './ClientContextController.types';
import {
  requestHostInterceptor,
  requestAuthInterceptor,
  requestParamsInterceptor,
  requestNoCacheInterceptor,
  responseUnauthorizedInterceptor,
} from 'api/interceptors';
import { useAuthState, useAuthDispatch } from 'shared/hooks';

export const ClientContextController: React.FC<ClientProviderProps> = ({ children }) => {
  const { accessToken } = useAuthState();
  const dispatch = useAuthDispatch();

  const client = useMemo(() => {
    return createClient({
      requestInterceptors: [
        requestHostInterceptor(String(process.env.REACT_APP_API_URL)),
        requestParamsInterceptor,
        requestAuthInterceptor(accessToken),
        requestNoCacheInterceptor,
      ],
      responseInterceptors: [responseUnauthorizedInterceptor(dispatch)],
    });
  }, [accessToken, dispatch]);

  return <ClientContextProvider client={client}>{children}</ClientContextProvider>;
};
