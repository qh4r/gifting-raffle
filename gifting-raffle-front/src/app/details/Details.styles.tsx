import styled from "../../theme";
import { Button, Container } from "semantic-ui-react";

export const Title = styled('p')`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const Attention = styled('span')`
  color: ${props => props.theme.variables.colors.action};
  font-size: 1.8em;
  &:before, &:after {
    content: " ";
  }
`

export const Code = styled('p')`
  color: ${props => props.theme.variables.colors.action};
  font-size: 1.1em;
  padding: 0.5em 0 0.25em;
`

export const Paragraph = styled('p')`
  font-size: 1.5rem;
  margin: 0 4rem 1.5rem;
  line-height: 3rem;
  vertical-align: center;
`;

export const StyledButton = styled(Button)`
  font-family: ${props => props.theme.variables.fonts.primary} !important;
 
`;

export const DetailsContainer = styled(Container)`
  .button-end {
    font-family: ${props => props.theme.variables.fonts.primary} !important;
    
    background-color: ${props => props.theme.variables.colors.action} !important;
  }
  
  img {
    margin: 1rem 1.5rem !important;
  }
  
  &.details-container.details-container { 
    @media only screen and (max-width: 768px) {   
      width: 90% !important;
    }
  }
`;
