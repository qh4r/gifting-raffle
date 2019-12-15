import { emailValidator } from './emailValidator';

describe('emailValidator', () => {
  const validEmails = ['foo@example.com'];
  const invalidEmails = ['www.google.com', 'random text'];

  it('return undefined on valid emails', () => {
    validEmails.forEach(email => {
      expect(emailValidator(email)).toEqual(undefined);
    });
  });

  it('return error object on strings which are not emails', () => {
    invalidEmails.forEach(email => {
      expect(emailValidator(email)).toEqual({ id: 'validation.email' });
    });
  });
});
