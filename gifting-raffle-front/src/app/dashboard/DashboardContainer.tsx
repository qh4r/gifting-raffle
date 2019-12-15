import React from 'react';
import { useQuery } from 'react-fetching-library';
import { useHistory } from 'react-router-dom';

import { RafflesListItem } from '../../api/actions/raffles/rafflesActions.types';
import { getRafflesLoginAction } from '../../api/actions/raffles/rafflesActions';

import { Dashboard } from './Dashboard';

export const DashboardContainer: React.FC = () => {
  const history = useHistory();
  const list = useQuery<RafflesListItem[]>(getRafflesLoginAction());

  const openDetails = (id: string) => {
    history.push(`/raffle/${id}`);
  };

  return <Dashboard loading={list.loading} rafflesList={list.payload} openDetails={openDetails} />;
};
