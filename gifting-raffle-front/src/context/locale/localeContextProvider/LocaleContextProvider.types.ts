import { ReactNode } from 'react';
import { InjectedIntlProps } from 'react-intl';

export type LocaleContextProviderProps = {
  locale: string;
  updateLocale: (locale: string) => void;
  children?: ReactNode;
} & InjectedIntlProps;
