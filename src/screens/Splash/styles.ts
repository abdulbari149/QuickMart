import { styled } from 'styled-components/native';

import { Dimensions } from 'styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const SplashLogo = styled.Image`
  width: ${Dimensions.width.size75}px;
`;
