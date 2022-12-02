import { FC } from 'react';

import Box from '../box';
import Text from '../text';
import { ButtonWrapper } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({
  children,
  variant,
  onPress,
  disabled = false,
}) => (
  <ButtonWrapper
    variant={variant}
    disabled={disabled}
    onPress={() => {
      if (disabled) return;
      onPress();
    }}
  >
    <Box width="100%" height="52px" center paddingHorizontal="16px">
      {typeof children === 'string' ? (
        <Text color="#fff">{children}</Text>
      ) : (
        children
      )}
    </Box>
  </ButtonWrapper>
);

export default Button;
