import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { FormattedMessage } from 'react-intl';

import { LocaleContextProvider } from 'context/locale';
import { AuthStateContext, AuthDispatchContext } from 'context/auth';
import { TestingRouter } from './testingRouter/TestingRouter';
import { anonymousAuthState } from './mocks/authStateMocks';
import { AuthStateContextType } from 'context/auth/authContext/AuthContext.types';
import { ThemeContextController } from 'context/theme';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Options = RenderOptions & {
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

const customRender = (node: ReactElement, options?: Omit<Options, 'queries'>) => {
  const Wrapper = ({children}: any) => <LocaleContextProvider {...localeContext}>
      <AuthStateContext.Provider value={options && options.authState ? options.authState : anonymousAuthState}>
        <ThemeContextController>
          <AuthDispatchContext.Provider value={jest.fn()}>
            <TestingRouter initialRoute={options ? options.initialRoute : ''}>{children}</TestingRouter>
          </AuthDispatchContext.Provider>
        </ThemeContextController>
      </AuthStateContext.Provider>
    </LocaleContextProvider>;

  return render(
    // eslint-disable-next-line react/jsx-props-no-spreading
    node,
    {
      ...options,
      wrapper: Wrapper
    }
  );
};

export * from '@testing-library/react';
export { renderHook, act as hookAct } from '@testing-library/react-hooks';
export { customRender as render };
export { TestingRouter } from './testingRouter/TestingRouter';
