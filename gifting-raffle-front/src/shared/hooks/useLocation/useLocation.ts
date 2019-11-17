import { useContext } from 'react';
import { __RouterContext } from 'react-router';

import { LocationContextType } from './useLocation.types';

export const useLocation = <T>(): LocationContextType<T> => {
  const context = useContext(__RouterContext);

  if (context === undefined) {
    throw new Error('useLocation must be used within a Router');
  }

  return {
    path: context.location.pathname,
    push: context.history.push,
    search: context.location.search,
    params: context.match ? context.match.params : {},
  };
};
