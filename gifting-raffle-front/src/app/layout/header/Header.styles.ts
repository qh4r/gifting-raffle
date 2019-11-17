import styled from "../../../theme";
import { Menu } from "semantic-ui-react";

export const StyledMenu = styled(Menu)`
  background-color: dodgerblue !important;
  .item {
    font-size: 1.5rem;
    
    @media only screen and (max-width: 768px) {   
      font-size: 1.2rem;
    }
  }
  
  & a, .item {
    border: none !important;
    
    &:before {
      width: 0px !important;
    }
  }
`;
