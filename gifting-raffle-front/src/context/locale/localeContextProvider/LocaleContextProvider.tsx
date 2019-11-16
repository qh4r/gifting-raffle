import React from 'react';

import { LocaleContext } from 'context/locale';
import { LocaleContextProviderProps } from './LocaleContextProvider.types';

export const LocaleContextProvider: React.FC<LocaleContextProviderProps> = ({
  children,
  intl: { formatMessage },
  ...props
}) => (
  <LocaleContext.Provider
    value={{
      formatMessage,
      ...props,
    }}
  >
    {children}
  </LocaleContext.Provider>
);
