import React from "react";
import { Details } from "./Details";
import { useMutation, useQuery } from "react-fetching-library";
import { RaffleDetails } from "../../api/actions/raffles/rafflesActions.types";
import { closeRaffleAction, getRaffleDetailsAction } from "../../api/actions/raffles/rafflesActions";
import { useLocation } from "shared/hooks/useLocation/useLocation";

export const DetailsContainer: React.FC = () => {
  const {
    params: { raffleId },
  } = useLocation();
  const { error, payload, loading } = useQuery<RaffleDetails>(
    getRaffleDetailsAction(raffleId),
  );

  const { mutate, loading: mutationLoading } = useMutation(closeRaffleAction);

  return <Details
    close={mutate}
    loading={loading || mutationLoading}
    raffle={payload}
    error={error}
  />
}
