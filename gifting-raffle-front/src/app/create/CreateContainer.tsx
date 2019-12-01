import React from 'react';
import { useMutation } from 'react-fetching-library';

import { createRaffleAction } from '../../api/actions/raffles/rafflesActions';

import { Create } from './Create';

export const CreateContainer: React.FC = () => {
  const { mutate } = useMutation(createRaffleAction);

  return <Create onSubmit={mutate} />;
};
