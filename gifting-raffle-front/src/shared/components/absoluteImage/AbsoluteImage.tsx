import { Form, Image } from 'semantic-ui-react';

import styled from '../../../theme';

export const AbsoluteImageContainerForm = styled(Form)`
  position: relative;
  z-index: 2;
`;

export const AbsoluteImage = styled(Image)`
  position: absolute !important;
  left: ${props => (props.floatRight ? '90%' : '50%')};
  top: 0;
  transform: translateX(-50%) translateY(-95%) ${props => (props.flip ? 'scaleX(-1)' : '')};
  height: ${props => (props.small ? '100px' : 'auto')} !important;
  width: auto;
  object-fit: scale-down;

  @media only screen and (max-width: 768px) {
    height: ${props => (props.floatRight ? '40px' : '100px')} !important;
  }
`;
