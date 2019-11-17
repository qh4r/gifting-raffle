import React from "react";
import { Dashboard } from "./Dashboard";
import { useQuery } from "react-fetching-library";
import { RafflesListItem } from "../../api/actions/raffles/rafflesActions.types";
import { getRafflesLoginAction } from "../../api/actions/raffles/rafflesActions";

export const DashboardContainer : React.FC = () => {
  const list = useQuery<RafflesListItem[]>(getRafflesLoginAction());

  return <Dashboard loading={list.loading} rafflesList={list.payload} />
}
