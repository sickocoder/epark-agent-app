import { FC } from 'react';

import { BoxView } from './box.styles';
import { BoxProps } from './box.types';

const Box: FC<BoxProps> = ({ children, ...props }) => (
  <BoxView {...props}>{children}</BoxView>
);

export default Box;
