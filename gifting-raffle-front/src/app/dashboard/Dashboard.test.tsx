import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import { render, fireEvent, waitForElement, getByText } from 'test';
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
    const { container } = render(<Dashboard loading={false} rafflesList={raffleListMock} openDetails={openDetails} />);

    const select = container.querySelector('.ui.selection.dropdown');
    expect(select.className.includes('active')).toBeFalsy();

    fireEvent.click(select);
    expect(select.className.includes('active')).toBeTruthy();

    fireEvent.click(getByText(select, 'foa'));
    expect(openDetails).toHaveBeenCalledTimes(1);
    expect(openDetails).toHaveBeenCalledWith('3');
  });

  it('Search raffles', async () => {
    const { container } = render(<Dashboard loading={false} rafflesList={raffleListMock} openDetails={openDetails} />);

    const search = container.querySelector('.ui.search');
    expect(search.querySelector('.result')).toBeFalsy();

    ReactTestUtils.Simulate.change(search.querySelector('input'), { target: { value: 'fo' } });

    await waitForElement(() => getByText(search, 'foo'), { search });
    const results = search.querySelectorAll('.result');

    expect(results.length).toEqual(2);
  });

  it('Invoke handler on search', async () => {
    const { container } = render(<Dashboard loading={false} rafflesList={raffleListMock} openDetails={openDetails} />);

    const search = container.querySelector('.ui.search');
    expect(search.querySelector('.result')).toBeFalsy();

    ReactTestUtils.Simulate.change(search.querySelector('input'), { target: { value: 'faa' } });

    const result = await waitForElement(() => getByText(search, 'faa'), { search });
    fireEvent.click(result);

    expect(openDetails).toHaveBeenCalledWith('2');
  });
});
