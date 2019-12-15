import React, { useState } from 'react';
import { IntlProvider, injectIntl, addLocaleData } from 'react-intl';
import pl from 'react-intl/locale-data/pl';

import { LocaleContextProvider } from '..';

import { LocaleContextControllerProps } from './LocaleContextController.types';

addLocaleData([...pl]);

const WrappedLocaleContext = injectIntl(LocaleContextProvider);

export const LocaleContextController: React.FC<LocaleContextControllerProps> = ({
  children,
  localeData,
  locale: localeProp,
}) => {
  const [locale, updateLocale] = useState(localeProp || 'pl');
  const messages = localeData[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      <WrappedLocaleContext locale={locale} updateLocale={updateLocale}>
        {children}
      </WrappedLocaleContext>
    </IntlProvider>
  );
};
