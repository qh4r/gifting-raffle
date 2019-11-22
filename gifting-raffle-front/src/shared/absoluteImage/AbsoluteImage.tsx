import styled from "../../theme";
import { Form, Image } from "semantic-ui-react";

export const AbsoluteImageContainerForm = styled(Form)`
  position: relative;
  z-index: 2;
`;

export const AbsoluteImage = styled(Image)`
  position: absolute !important;
  left: ${props => props.floatRight ? "90%" : "50%"};
  top: 0;
  transform: translateX(-50%) translateY(-95%) ${props => props.flip ? "scaleX(-1)" : ""};
  
  @media only screen and (max-width: 768px) {
    height: ${props => props.floatRight ? "40px" : "100px"} !important;
    width: auto;
    object-fit: scale-down;
  }
`;
