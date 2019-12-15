import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { FullscreenLoader } from '../fullscreenLoader/FullscreenLoader';

import { useAuthState } from 'shared/hooks';

export const AuthorizedRoute: React.FC<RouteProps> = props => {
  const { isAuthorized, isAuthorizing } = useAuthState();

  if (isAuthorizing) {
    return <FullscreenLoader />;
  }

  if (isAuthorized) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
};
