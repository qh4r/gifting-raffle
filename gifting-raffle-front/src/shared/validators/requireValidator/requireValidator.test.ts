import { requireValidator } from './requireValidator';

describe('requireValidator tests', () => {
  it('fail validation when value is empty string', () => {
    expect(requireValidator('')).toEqual({ id: 'validation.required' });
  });

  it('pass validation when value is correct string', () => {
    expect(requireValidator('test')).toBe(undefined);
  });

  it('pass validation when value is 0', () => {
    expect(requireValidator(0)).toBe(undefined);
  });

  it('pass validation when value is number', () => {
    expect(requireValidator(10)).toBe(undefined);
  });
});
