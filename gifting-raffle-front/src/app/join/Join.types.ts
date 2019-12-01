import { QueryResponse } from 'react-fetching-library';

import { JoinRaffleBody } from '../../api/actions/raffles/rafflesActions.types';

export type JoinProps = {
  onSubmit: (props: JoinRaffleBody) => Promise<QueryResponse>;
};
