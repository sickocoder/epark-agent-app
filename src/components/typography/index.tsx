import { FC } from 'react';

import { Text } from './typography.styles';
import { TypographyProps } from './typography.types';

const Typography: FC<TypographyProps> = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export default Typography;
