import styled from "../../../theme";
import { Menu } from "semantic-ui-react";

export const StyledMenu = styled(Menu)`
  background-color: ${props => props.theme.variables.colors.headerBackground} !important;
  .item {
    font-size: 1.5rem;
    
    @media only screen and (max-width: 768px) {   
      font-size: 1.2rem;
      padding: 15px 5px 15px 10px !important;
    }
  }
  
  .dropdown {
    &:before {
      width: 0px !important;
    }
    
    .menu {
      background-color: ${props => props.theme.variables.colors.headerBackground} !important;
      border: none !important;
      
      & > .item.item.item.item.item {
        color: white !important;
        background-color: rgba(255, 255, 255, 0.15) !important;
      }
    }
  }
  
  & a, .item {
    border: none !important;
    
    &:before {
      width: 0px !important;
    }
  }
`;

export const Title = styled('span')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (max-width: 768px) {
    max-width: 40%;
  }
`
