import React from 'react';

import { render } from 'test';
import { act } from "@testing-library/react";
import { Counter } from "./Counter";

describe('Dashboard', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('does not attempt to set state when unmounted (to prevent memory leaks)', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.useFakeTimers()
    const {unmount} = render(<Counter />);
    unmount();
    act(() => jest.runOnlyPendingTimers());
    expect(console.error).not.toHaveBeenCalled();
  });
});
