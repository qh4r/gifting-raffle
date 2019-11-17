import { QueryResponse } from "react-fetching-library";
import { CreateRaffleBody } from "../../api/actions/raffles/rafflesActions.types";

export type CreateProps = {
  onSubmit: (props: CreateRaffleBody) => Promise<QueryResponse>;
}
