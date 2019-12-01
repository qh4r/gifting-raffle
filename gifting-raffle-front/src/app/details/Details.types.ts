import { QueryResponse } from 'react-fetching-library';

import { RaffleDetails } from '../../api/actions/raffles/rafflesActions.types';

export type DetailsProps = {
  raffle?: RaffleDetails;
  close: (raffleId: string) => Promise<QueryResponse>;
  error: boolean;
  loading: boolean;
};
