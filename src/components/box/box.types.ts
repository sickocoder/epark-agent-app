import { ReactNode } from 'react';
import { BoxStyleProps } from './box-styles/box.styles.types';

export interface BoxProps extends BoxStyleProps {
  children?: ReactNode;
}
