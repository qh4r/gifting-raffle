import { RafflesListItem } from '../../api/actions/raffles/rafflesActions.types';

export type DashboardPropsType = {
  rafflesList?: RafflesListItem[];
  loading: boolean;
  openDetails: (id: string) => void;
};
