import React, { useState, useEffect } from 'react';

import { ThemeProvider, theme } from 'theme';
import { ThemeContextControllerProps } from './ThemeContextController.types';

export const ThemeContextController: React.FC<ThemeContextControllerProps> = ({ children }) => {
  const [themeVariables, setThemeVariables] = useState(theme);

  return <ThemeProvider theme={themeVariables}>{children}</ThemeProvider>;
};
