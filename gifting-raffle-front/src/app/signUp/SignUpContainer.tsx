import React from 'react';
import { useMutation } from 'react-fetching-library';

import { signUpAction } from 'api/actions/auth/authActions';
import { SignUp } from './SignUp';

export const SignUpContainer: React.FC = () => {
  const { mutate } = useMutation(signUpAction);

  return <SignUp onSubmit={mutate} />;
};
