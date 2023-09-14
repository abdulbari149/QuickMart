import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.grey50};
`;

export const AppText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
`;
