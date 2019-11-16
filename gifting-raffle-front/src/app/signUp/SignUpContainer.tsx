import React from 'react';
import { useMutation } from 'react-fetching-library';

import { createSignUpAction } from 'api/actions/auth/authActions';
import { SignUp } from './SignUp';

export const SignUpContainer: React.FC = () => {
  const { mutate } = useMutation(createSignUpAction);

  return <SignUp onSubmit={mutate} />;
};
