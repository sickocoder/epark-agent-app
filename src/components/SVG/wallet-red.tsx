import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const WalletRedSvgComponent = (props: SvgProps) => (
  <Svg
    width={38}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect opacity={0.15} width={38} height={35.379} rx={6} fill="#FF5961" />
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.847 8.473a1 1 0 0 0-1.225.707L5.668 20.203a1 1 0 0 0 .708 1.225l20.739 5.557a1 1 0 0 0 1.224-.707l2.954-11.023a1 1 0 0 0-.707-1.225L9.846 8.473Zm12.952 10.413a4.47 4.47 0 1 1-8.637-2.314 4.47 4.47 0 0 1 8.637 2.314Z"
      fill="#FF5961"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.745 11.023a1 1 0 0 0-1 1v11.412a1 1 0 0 0 1 1h21.47a1 1 0 0 0 1-1V12.023a1 1 0 0 0-1-1H7.746Zm15.206 6.706a4.47 4.47 0 1 1-8.941 0 4.47 4.47 0 0 1 8.941 0Zm-4.47 2.235a2.235 2.235 0 1 0 0-4.47 2.235 2.235 0 0 0 0 4.47Z"
      fill="#FF5961"
    />
  </Svg>
);

export default WalletRedSvgComponent;
