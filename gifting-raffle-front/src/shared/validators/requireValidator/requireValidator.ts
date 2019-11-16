export const requireValidator = (value: string | number) => {
  if (value === undefined || value === null || value === '') {
    return { id: 'validation.required' };
  }

  return undefined;
};
