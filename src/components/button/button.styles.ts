import styled from 'styled-components/native';

import { ButtonWrapperProps } from './button.types';

// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.TouchableOpacity<ButtonWrapperProps>`
  border-radius: ${(props) => props.theme.borderRadius};

  ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: ${props.theme.palette.common.black};
        `;
      case 'primary':
      default:
        return `
          background-color: ${props.theme.palette.primary};
        `;
    }
  }}
`;
