import React from 'react';
import { useMutation } from 'react-fetching-library';

import { Join } from './Join';
import { joinRaffleAction } from "../../api/actions/raffles/rafflesActions";

export const JoinContainer: React.FC = () => {
  const { mutate } = useMutation(joinRaffleAction);

  return <Join onSubmit={mutate} />;
};
