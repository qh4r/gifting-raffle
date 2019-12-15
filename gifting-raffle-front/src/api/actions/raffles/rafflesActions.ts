import { Action } from 'api/types';
import { CreateRaffleBody, JoinRaffleBody } from "./rafflesActions.types";

export const getRafflesLoginAction: () => Action = () => ({
  skipAuth: false,
  endpoint: '/raffles/list',
  method: 'GET',
});


export const getRaffleDetailsAction: (raffleId: string) => Action = (raffleId: string) => ({
  skipAuth: false,
  endpoint: `/raffles/${raffleId}/details`,
  method: 'GET',
});


export const closeRaffleAction: (raffleId: string) => Action = (raffleId: string) => ({
  skipAuth: false,
  endpoint: `/raffles/${raffleId}/end`,
  method: 'POST',
});

export const joinRaffleAction: (body: JoinRaffleBody) => Action = body => ({
  skipAuth: false,
  endpoint: `/raffles/join`,
  method: 'POST',
  body,
});

export const createRaffleAction: (body: CreateRaffleBody) => Action = body => ({
  skipAuth: false,
  endpoint: `/raffles/create`,
  method: 'POST',
  body,
});

