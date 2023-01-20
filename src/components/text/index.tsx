import { FC } from 'react';

import { TextWrapper } from './text.styles';
import { TextProps } from './text.types';

const Text: FC<TextProps> = ({
  variant = 'normal',
  align = 'left',
  color,
  children,
}) => (
  <TextWrapper variant={variant} align={align} color={color}>
    {children}
  </TextWrapper>
);

export default Text;
