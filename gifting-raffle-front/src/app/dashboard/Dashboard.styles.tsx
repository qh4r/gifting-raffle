import styled from "../../theme";
import { Container, Grid, List } from "semantic-ui-react";

export const StyledColumn = styled(Grid.Column)`
  margin-top: 20px;
`
export const StyledListHeader = styled(List.Header)`
  font-family: ${props => props.theme.variables.fonts.primary} !important;
`

export const ListTitle = styled("h2")`
  margin-bottom: 20px;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  font-family: ${props => props.theme.variables.fonts.primary} !important;
`

export const Empty = styled("div")`
  margin: 20px 0;
  text-align: center !important;
`

export const DashboardContainer = styled(Container)`
  a, button {
    font-family: ${props => props.theme.variables.fonts.primary} !important;
  }
  
  img {
    margin: 1rem 0.5rem !important;
  }
  
  &.dashboard-container.dashboard-container { 
    font-family: ${props => props.theme.variables.fonts.primary} !important;
    @media only screen and (max-width: 768px) {   
      width: 90% !important;
    }
  }
`;
