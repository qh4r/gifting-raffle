import styled from "../../theme";
import { Container, Grid, List } from "semantic-ui-react";

export const StyledColumn = styled(Grid.Column)`
  margin-top: 20px;
`
export const StyledListHeader = styled(List.Header)`
  font-family: 'Mountains of Christmas', cursive !important;
`

export const ListTitle = styled("h2")`
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Mountains of Christmas', cursive;
`

export const DashboardContainer = styled(Container)`
  a, button {
    font-family: 'Mountains of Christmas', cursive !important;
  }
  
  img {
    margin: 1rem 1.5rem !important;
  }
  
  &.dashboard-container.dashboard-container { 
    @media only screen and (max-width: 768px) {   
      width: 90% !important;
    }
  }
`;
