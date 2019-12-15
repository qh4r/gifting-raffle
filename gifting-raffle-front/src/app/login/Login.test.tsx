import React from 'react';

import { render, fireEvent } from 'test';
import { Login } from './Login';

describe('LoginContainer', () => {
  it('Enable login button after user change any input', () => {
    const { container } = render(<Login onSubmit={jest.fn()} />);

    const loginButton = container.querySelector('button[type="submit"]');
    expect(loginButton.disabled).toBeTruthy();

    const loginInput = container.querySelector('[name="email"]');
    fireEvent.change(loginInput, { target: { value: 'testLogin' } });
    expect(loginButton.disabled).toBeFalsy();
  });

  it('Invoke on submit with correct values', () => {
    const onSubmit = jest.fn(() => new Promise(res => res({})));

    const { container } = render(<Login onSubmit={onSubmit} />);

    const email = 'testLogin@foo.bar';
    const password = 'testPass';

    const loginInput = container.querySelector('[name="email"]');
    fireEvent.change(loginInput, { target: { value: email } });

    const passwordInput = container.querySelector('[name="password"]');
    fireEvent.change(passwordInput, { target: { value: password } });

    const loginButton = container.querySelector('button[type="submit"]');
    fireEvent.click(loginButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      email,
      password,
    });
  });
});
