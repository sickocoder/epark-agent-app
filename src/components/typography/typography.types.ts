import { ReactNode } from 'react';

import { TypographyBasicStyleProps } from './typography-config/typography-config.types';

export interface TypographyProps extends TypographyBasicStyleProps {
  children: ReactNode;
}
