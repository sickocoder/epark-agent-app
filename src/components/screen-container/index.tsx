import { FC } from 'react';

import { SafeAreaViewWrapper, ViewWrapper } from './screen-container.styles';
import { ScreenContainerProps } from './screen-container.types';

const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  withSafeArea = false,
}) => {
  if (withSafeArea)
    return <SafeAreaViewWrapper>{children}</SafeAreaViewWrapper>;

  return <ViewWrapper>{children}</ViewWrapper>;
};

export default ScreenContainer;
