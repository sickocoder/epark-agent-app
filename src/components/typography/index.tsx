import { FC } from 'react';
import { TypographyProps } from './typography.types';

import { Text } from './typography.styles';

const Typography: FC<TypographyProps> = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export default Typography;
