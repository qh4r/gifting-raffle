import styled from 'theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
`;

export const LoadingText = styled('p')`
  font-size: 30px !important;
  color: ${props => props.theme.variables.colors.primary};
`;
