import * as styledComponents from 'styled-components';

import { theme } from './Theme';
import { Theme as ThemeInterface } from './Theme.types';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, theme, ThemeProvider, ThemeContext };

export default styled;
