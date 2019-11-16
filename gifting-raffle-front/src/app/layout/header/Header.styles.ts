import styled from "../../../theme";
import { Menu } from "semantic-ui-react";

export const StyledMenu = styled(Menu)`
  background-color: dodgerblue !important;
  
  & a, .item {
    border: none !important;
    
    &:before {
      width: 0px !important;
    }
  }
`;
