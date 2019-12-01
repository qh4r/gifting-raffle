export type RafflesListItem = {
  id: string;
  name: string;
  isOwner: boolean;
  finished: boolean;
};

export type RaffleDetails = {
  id: string;
  name: string;
  isOwner: boolean;
  finished: boolean;
  pairsCount: number;
  raffleKey?: string;
  yourMatch?: string;
};

export type JoinRaffleBody = {
  raffleKey: string;
};

export type CreateRaffleBody = {
  name: string;
};
