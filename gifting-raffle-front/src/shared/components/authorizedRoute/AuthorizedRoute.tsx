import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';


import { useAuthState } from 'shared/hooks';
import { FullscreenLoader } from "../fullscreenLoader/FullscreenLoader";

export const AuthorizedRoute: React.FC<RouteProps> = (props) => {
  const { isAuthorized, isAuthorizing } = useAuthState();

  if (isAuthorizing) {
    return <FullscreenLoader />;
  }

  if (isAuthorized) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
};
