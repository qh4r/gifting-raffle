import React from 'react';
import * as jwt from 'jsonwebtoken';

import { render } from 'test';
import { SignUp } from './SignUp';

describe('SignUp component', () => {
  it('registration form should be validated', () => {
    const handleSubmit = jest.fn();
    const wrapper = render(<SignUp onSubmit={handleSubmit} />);

    const defaultText = 'register.confirmregister.old register.login';

    const emailField = wrapper.find('[name="email"]').at(1);
    emailField.simulate('change', { target: { value: 'wrongmail@' } });
    // Error fires when email format is invalid
    expect(wrapper.text()).toEqual(`validation.email${defaultText}`);
    // Clear validation error
    emailField.simulate('change', { target: { value: 'correct@email.com' } });

    const passwordField = wrapper.find('[name="password"]').at(1);
    const repeatPasswordField = wrapper.find('[name="repeatPassword"]').at(1);

    passwordField.simulate('change', { target: { value: 'test' } });
    // Error fires when password has less than 8 signs
    expect(wrapper.text()).toEqual(`error.password.tooShort${defaultText}`);

    passwordField.simulate('change', { target: { value: 'test1234' } });
    repeatPasswordField.simulate('change', { target: { value: 'test12345' } });
    // Error fires when password doesn't match repeated password
    expect(wrapper.text()).toEqual(`error.password.notMatching${defaultText}`);
  });

  it('should register a new user', async () => {
    const token = jwt.sign({ userId: '1', name: 'name' }, 'key');
    const handleSubmit = jest.fn().mockImplementation(() => ({ body: { accessToken: token } }));

    const wrapper = render(<SignUp onSubmit={handleSubmit} />);

    const emailField = wrapper.find('[name="email"]').at(1);
    const nameField = wrapper.find('[name="name"]').at(1);
    const passwordField = wrapper.find('[name="password"]').at(1);
    const repeatPasswordField = wrapper.find('[name="repeatPassword"]').at(1);
    const submitButton = wrapper.find('[type="submit"]').at(1);

    emailField.simulate('change', { target: { value: 'jon@email.com' } });
    nameField.simulate('change', { target: { value: 'Jon Doe' } });
    passwordField.simulate('change', { target: { value: 'test1234' } });
    repeatPasswordField.simulate('change', { target: { value: 'test1234' } });
    submitButton.simulate('click');

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'jon@email.com',
      name: 'Jon Doe',
      password: 'test1234',
      repeatPassword: 'test1234',
    });
  });
});