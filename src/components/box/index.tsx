import { FC } from 'react';
import { BoxProps } from './box.types';

import { BoxView } from './box.styles';

const Box: FC<BoxProps> = ({ children, ...props }) => (
  <BoxView {...props}>{children}</BoxView>
);

export default Box;
