import React from 'react';
import * as jwt from 'jsonwebtoken';
import { render, fireEvent, wait } from 'test';
import { SignUp } from './SignUp';

describe('SignUp component', () => {
  it('should display error if passed invalid email', () => {
    const handleSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SignUp onSubmit={handleSubmit} />);

    const emailField = getByPlaceholderText('register.email');

    fireEvent.change(emailField, { target: { value: 'wrongmail@pl' } });
    expect(getByText('validation.email'));

    const passwordField = getByPlaceholderText('register.password');
    const repeatPasswordField = getByPlaceholderText('register.repeat');

    // Error fires when password has less than 8 signs
    fireEvent.change(passwordField, { target: { value: 'test' } });
    expect(getByText('error.password.tooShort'));

    // Error fires when password doesn't match repeated password
    fireEvent.change(passwordField, { target: { value: 'test1234' } });
    fireEvent.change(repeatPasswordField, { target: { value: 'test12345' } });
    expect(getByText('error.password.notMatching'));
  });

  it('should register a new user', async () => {
    const token = jwt.sign({ userId: '1', name: 'name' }, 'key');
    const handleSubmit = jest.fn().mockImplementation(() => ({ body: { accessToken: token } }));

    const { getByText, getByPlaceholderText } = render(<SignUp onSubmit={handleSubmit} />);
    const emailField = getByPlaceholderText('register.email');
    const nameField = getByPlaceholderText('register.name');
    const passwordField = getByPlaceholderText('register.password');
    const repeatPasswordField = getByPlaceholderText('register.repeat');
    const submitButton = getByText('register.confirm');

    fireEvent.change(emailField, { target: { value: 'jon@email.com' } });
    fireEvent.change(nameField, { target: { value: 'Jon Doe' } });
    fireEvent.change(passwordField, { target: { value: 'test1234' } });
    fireEvent.change(repeatPasswordField, { target: { value: 'test1234' } });
    fireEvent.click(submitButton);

    await wait();

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'jon@email.com',
      name: 'Jon Doe',
      password: 'test1234',
      repeatPassword: 'test1234',
    });
  });
});
