import React from 'react';
import { useMutation } from 'react-fetching-library';

import { joinRaffleAction } from '../../api/actions/raffles/rafflesActions';

import { Join } from './Join';

export const JoinContainer: React.FC = () => {
  const { mutate } = useMutation(joinRaffleAction);

  return <Join onSubmit={mutate} />;
};
