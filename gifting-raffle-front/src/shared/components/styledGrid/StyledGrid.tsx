import styled from "../../../theme";
import { Grid } from "semantic-ui-react";

export const StyledGrid = styled(Grid)`
  height: 100vh;
  width: 100%; 
  
  button, input {
    font-family: ${props => props.theme.variables.fonts.primary} !important;
  }
`;
