import React from 'react';

import { render, fireEvent, waitForElement, act, getByText } from 'test';
import { Dashboard } from './Dashboard';

const raffleListMock = [
  {
    id: '1',
    name: 'foo',
    isOwner: false,
    finished: false,
  },
  {
    id: '2',
    name: 'faa',
    isOwner: false,
    finished: false,
  },
  {
    id: '3',
    name: 'foa',
    isOwner: false,
    finished: false,
  },
];

const openDetails = jest.fn();

describe('Dashboard', () => {
  it('Invoke handler on select', () => {
    const { getByText, container} = render(<Dashboard  loading={false} rafflesList={raffleListMock} openDetails={openDetails} />);

    expect(container.querySelector('.ui.selection.dropdown.active')).toBeFalsy();

    const select = getByText(/Select/);
    fireEvent.click(select);

    expect(container.querySelector('.ui.selection.dropdown.active')).toBeTruthy();

    fireEvent.click(getByText("foa"));
    expect(openDetails).toHaveBeenCalledTimes(1);
    expect(openDetails).toHaveBeenCalledWith('3');
  });

  it('Search raffles', async () => {
    const { container, getByRole, getByText } = render(<Dashboard modernSearch loading={false} rafflesList={raffleListMock} openDetails={openDetails} />);

    expect(container.querySelector('.result')).toBeFalsy();
    fireEvent.change(getByRole('search'), { target: { value: 'fo' } });

    await waitForElement(() => getByText( 'foo'));

    expect(container.querySelectorAll('.result')?.length).toEqual(2);
  });

  it('Invoke handler on search', async () => {
    const { container, getByText } = render(<Dashboard modernSearch loading={false} rafflesList={raffleListMock} openDetails={openDetails} />);

    const search = container.querySelector('.ui.search');
    expect(search.querySelector('.result')).toBeFalsy();

    fireEvent.change(search.querySelector('input'), { target: { value: 'faa' } });

    const result = await waitForElement(() => getByText( 'faa'));
    fireEvent.click(result);

    expect(openDetails).toHaveBeenCalledWith('2');
  });
});
