import React, { ReactNode } from 'react';
import { __RouterContext as LocationContext, RouteComponentProps } from 'react-router';

import { renderHook } from 'test';
import { useLocation } from './useLocation';

describe('useLocation test', () => {
  const location = {
    pathname: 'test',
    search: 'test',
    state: 'test',
    hash: 'test',
  };
  const push = jest.fn();

  const locationContext: RouteComponentProps<{ foo: string }> = {
    location,
    match: {
      params: { foo: 'bar' },
      isExact: false,
      path: 'test',
      url: 'test',
    },
    history: {
      location,
      push,
      length: 5,
      action: 'PUSH',
      replace: jest.fn(),
      go: jest.fn(),
      goBack: jest.fn(),
      goForward: jest.fn(),
      block: jest.fn(),
      listen: jest.fn(),
      createHref: jest.fn(),
    },
  };

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <LocationContext.Provider value={locationContext}>{children}</LocationContext.Provider>
  );

  it('returns locationContext', async () => {
    const { result } = renderHook(useLocation, {
      wrapper,
    });

    expect(result.current).toEqual({
      path: locationContext.location.pathname,
      push: locationContext.history.push,
      search: locationContext.location.search,
      params: locationContext.match.params,
    });
  });

  it('throws error when useLocation is not used within LocationContextProvider', async () => {
    const { result } = renderHook(useLocation);

    expect(result.error).toEqual(Error('useLocation must be used within a Router'));
  });
});
