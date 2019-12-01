import { Grid } from 'semantic-ui-react';

import styled from 'theme';

export const ErrorText = styled('p')`
  margin: 5px;
  color: ${props => props.theme.variables.colors.danger};
`;
