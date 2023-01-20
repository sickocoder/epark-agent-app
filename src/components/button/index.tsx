import { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import Box from '../box';
import Text from '../text';
import { ButtonWrapper } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({
  children,
  variant,
  onPress,
  disabled = false,
  loading = false,
}) => (
  <ButtonWrapper
    variant={variant}
    disabled={disabled}
    onPress={() => {
      if (disabled) return;
      if (!onPress) return;
      onPress();
    }}
  >
    <Box width="100%" height="46px" center paddingHorizontal="16px">
      {(() => {
        if (loading) {
          return <ActivityIndicator size="small" color="#fff" />;
        }

        return typeof children === 'string' ? (
          <Text color="#fff">{children}</Text>
        ) : (
          children
        );
      })()}
    </Box>
  </ButtonWrapper>
);

export default Button;
