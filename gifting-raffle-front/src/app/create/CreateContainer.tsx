import React from 'react';
import { useMutation } from 'react-fetching-library';

import { Create } from './Create';
import { createRaffleAction } from "../../api/actions/raffles/rafflesActions";

export const CreateContainer: React.FC = () => {
  const { mutate } = useMutation(createRaffleAction);

  return <Create onSubmit={mutate} />;
};
