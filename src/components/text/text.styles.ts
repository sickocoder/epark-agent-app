import styled from 'styled-components/native';
import {
  css,
  InterpolationFunction,
  ThemeProps,
  DefaultTheme,
  FlattenInterpolation,
} from 'styled-components';

import { FontsEnum } from '../../constants';
import { TextWrapperProps, TVariant } from './text.types';

const variantStyles: Record<
  TVariant,
  | InterpolationFunction<ThemeProps<DefaultTheme>>
  | FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  normal: css`
    font-family: ${FontsEnum.inter.Inter_400Regular};
    color: ${({ theme }) => theme.palette.common.gray2};
    font-size: 16px;
  `,
  heading: css`
    font-family: ${FontsEnum.poppings.Poppins_800ExtraBold};
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 28px;
  `,
};

// eslint-disable-next-line import/prefer-default-export
export const TextWrapper = styled.Text<TextWrapperProps>`
  ${({ variant }) => variantStyles[variant]}
  text-align: ${(props) => props.align};
  ${(props) => (props.color ? `color: ${props.color}` : '')}
`;
