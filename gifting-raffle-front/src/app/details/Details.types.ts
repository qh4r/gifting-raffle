import { RaffleDetails } from "../../api/actions/raffles/rafflesActions.types";
import { QueryResponse } from "react-fetching-library";

export type DetailsProps = {
  raffle?: RaffleDetails;
  close: (raffleId: string) => Promise<QueryResponse>
  error: boolean;
  loading: boolean;
}
