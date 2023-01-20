import styled from 'styled-components/native';

export const ViewWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const SafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.common.white};
`;
