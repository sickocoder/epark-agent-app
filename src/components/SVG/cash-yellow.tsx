import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CashYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={29}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.362.327a1 1 0 0 0-1.225.707L1.031 12.625a1 1 0 0 0 .707 1.225l21.734 5.823a1 1 0 0 0 1.224-.707l3.106-11.591a1 1 0 0 0-.707-1.225L5.362.327Zm13.562 10.88A4.667 4.667 0 1 1 9.91 8.793a4.667 4.667 0 0 1 9.015 2.416Z"
      fill="#F3CD3D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.167 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h22.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-22.5Zm15.916 7a4.667 4.667 0 1 1-9.333 0 4.667 4.667 0 0 1 9.333 0Zm-4.666 2.333a2.333 2.333 0 1 0 0-4.666 2.333 2.333 0 0 0 0 4.666Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default CashYellowSvgComponent;
