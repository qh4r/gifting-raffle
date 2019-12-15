import styled from "theme";
import { Grid } from "semantic-ui-react";

export const ErrorText = styled('p')`
  margin: 5px;
  color: ${props => props.theme.variables.colors.danger};
`;
