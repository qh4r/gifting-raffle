import styled from "theme";
import { Grid } from "semantic-ui-react";

export const ErrorText = styled('p')`
  margin: 5px;
  color: ${props => props.theme.variables.colors.danger};
`;

export const StyledGrid = styled(Grid)`
  height: 100vh;
  width: 100%; 
  
  button, input {
    font-family: 'Mountains of Christmas', cursive !important;
  }
`;
