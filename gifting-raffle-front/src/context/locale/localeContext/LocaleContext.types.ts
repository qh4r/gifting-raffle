import { FormattedMessage, MessageValue } from 'react-intl';

export type LocaleContextType = {
  formatMessage: (
    messageDescriptor: FormattedMessage.MessageDescriptor,
    values?: { [key: string]: MessageValue },
  ) => string;
  locale: string;
  updateLocale: (locale: string) => void;
};
