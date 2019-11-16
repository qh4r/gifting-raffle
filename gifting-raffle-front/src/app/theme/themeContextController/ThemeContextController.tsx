import React, { useState, useEffect } from 'react';

import { ThemeProvider, theme } from 'theme';
import { ThemeContextControllerProps } from './ThemeContextController.types';
import { useAuthState } from 'shared/hooks';

export const ThemeContextController: React.FC<ThemeContextControllerProps> = ({ children }) => {
  const [themeVariables, setThemeVariables] = useState(theme);
  const {  } = useAuthState();

  return <ThemeProvider theme={themeVariables}>{children}</ThemeProvider>;
};
