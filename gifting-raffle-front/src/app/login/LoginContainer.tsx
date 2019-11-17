import React from 'react';
import { useMutation } from 'react-fetching-library';

import { loginAction } from 'api/actions/auth/authActions';
import { Login } from './Login';

export const LoginContainer: React.FC = () => {
  const { mutate } = useMutation(loginAction);

  return <Login onSubmit={mutate} />;
};
