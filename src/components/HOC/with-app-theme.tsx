import { FC } from 'react';

import { defaulTheme } from '../../theme';

const withAppTheme = <T extends object>(C: FC<T>) => {
  const ThemedComponent: FC<T> = (props) => (
    <C {...props} theme={defaulTheme} />
  );

  return ThemedComponent;
};

export default withAppTheme;
