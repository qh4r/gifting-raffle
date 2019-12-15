import React from 'react';

import { render } from 'test';
import { Details } from './Details';
import { RaffleDetails } from "../../api/actions/raffles/rafflesActions.types";

const makeRaffle = (finished: boolean) => ({
  finished,
  name: "test",
  isOwner: false,
  yourMatch: "test2",
  raffleKey: "test-key",
  pairsCount: 7,
  id: "3"
});

describe('Details', () => {
  it('Invoke handler on select', () => {
    const close = jest.fn();
    const raffle: RaffleDetails = makeRaffle(false);
    const { queryByText, rerender } = render(
      <Details raffle={raffle} close={close} error={false} loading={false}/>
    );

    expect(queryByText('details.open')).toBeTruthy();
    expect(queryByText('details.yourPick')).toBeFalsy();

    const updatedRaffle: RaffleDetails = makeRaffle(true);

    rerender(<Details raffle={updatedRaffle} close={close} error={false} loading={false}/>);
    expect(queryByText('details.open')).toBeFalsy();
    expect(queryByText('details.yourPick')).toBeTruthy();
  });
});
