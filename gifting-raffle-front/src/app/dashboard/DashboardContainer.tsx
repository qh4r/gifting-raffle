import React from 'react';
import { useQuery } from 'react-fetching-library';

import { RafflesListItem } from '../../api/actions/raffles/rafflesActions.types';
import { getRafflesLoginAction } from '../../api/actions/raffles/rafflesActions';

import { Dashboard } from './Dashboard';

export const DashboardContainer: React.FC = () => {
  const list = useQuery<RafflesListItem[]>(getRafflesLoginAction());

  return <Dashboard loading={list.loading} rafflesList={list.payload} />;
};
