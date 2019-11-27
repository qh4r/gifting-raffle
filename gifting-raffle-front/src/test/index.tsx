import React, { ReactElement } from 'react';
import { mount, MountRendererProps } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { LocaleContextProvider } from 'context/locale';
import { AuthStateContext, AuthDispatchContext } from 'context/auth';
import { TestingRouter } from './testingRouter/TestingRouter';
import { anonymousAuthState } from './mocks/authStateMocks';
import { AuthStateContextType } from 'context/auth/authContext/AuthContext.types';
import { ThemeContextController } from 'context/theme';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Options = MountRendererProps & {
  authState?: AuthStateContextType;
  initialRoute?: string;
};

const localeContext = {
  intl: {
    formatMessage: ({ id }: FormattedMessage.MessageDescriptor) => id,
  } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  locale: 'en',
  updateLocale: () => null,
};

const customRender = (node: ReactElement, options?: Options) => {
  return mount(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <LocaleContextProvider {...localeContext}>
      <AuthStateContext.Provider value={options && options.authState ? options.authState : anonymousAuthState}>
        <ThemeContextController>
          <AuthDispatchContext.Provider value={jest.fn()}>
            <TestingRouter initialRoute={options ? options.initialRoute : ''}>{node}</TestingRouter>
          </AuthDispatchContext.Provider>
        </ThemeContextController>
      </AuthStateContext.Provider>
    </LocaleContextProvider>,
    options,
  );
};

export * from 'enzyme';
export { customRender as render };
export { TestingRouter } from './testingRouter/TestingRouter';
