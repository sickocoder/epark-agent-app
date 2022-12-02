import styled, { DefaultTheme } from 'styled-components/native';

import { FontsEnum } from '../../constants';
import { StyledTextInputProps } from './text-input.types';

const getInputBorderColor = (
  theme: DefaultTheme,
  hasFocus: boolean,
  error: unknown
) => {
  if (error) return '#f00';
  if (hasFocus) return theme.palette.common.black;

  return theme.palette.border.lightGray;
};

// eslint-disable-next-line import/prefer-default-export
export const NativeTextInput = styled.TextInput<StyledTextInputProps>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, hasFocus, error }) =>
    getInputBorderColor(theme, hasFocus, error)};
  border-radius: ${({ theme }) => theme.borderRadius};

  font-size: 15px;
  font-family: ${FontsEnum.inter.Inter_400Regular};

  padding-vertical: 14px;
  padding-horizontal: 16px;

  background-color: ${({ theme }) => theme.palette.common.lightGray};
`;
