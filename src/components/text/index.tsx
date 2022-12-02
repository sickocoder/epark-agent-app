import { FC } from 'react';
import { TextProps } from './text.types';

import { TextWrapper } from './text.styles';

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
