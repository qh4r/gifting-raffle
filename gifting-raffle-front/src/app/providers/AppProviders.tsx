import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import flatten from 'flat';

import { LocaleContextController } from 'context/locale';
import { ClientContextController } from 'context/client';
import { AuthContextController } from 'context/auth';
import { ThemeContextController } from 'context/theme';
import pl from 'locale/pl.json';
import { Props } from './AppProviders.types';

const messages = flatten<object, { [key: string]: string }>(pl);

export const AppProviders: React.FC<Props> = ({ children }) => (
  <LocaleContextController localeData={{ pl: messages }}>
    <AuthContextController>
      <ThemeContextController>
        <ClientContextController>
          <Router>{children}</Router>
        </ClientContextController>
      </ThemeContextController>
    </AuthContextController>
  </LocaleContextController>
);
