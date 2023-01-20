import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const WalletYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={36}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect opacity={0.15} width={36} height={33.517} rx={6} fill="#F3CD3D" />
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.38 8.04a1 1 0 0 0-1.225.708l-2.77 10.34a1 1 0 0 0 .706 1.226l19.546 5.237a1 1 0 0 0 1.225-.707l2.77-10.341a1 1 0 0 0-.706-1.225L9.38 8.041Zm12.22 9.852a4.235 4.235 0 1 1-8.182-2.193 4.235 4.235 0 0 1 8.182 2.193Z"
      fill="#F3CD3D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.39 10.443a1 1 0 0 0-1 1v10.706a1 1 0 0 0 1 1h20.235a1 1 0 0 0 1-1V11.443a1 1 0 0 0-1-1H7.39Zm14.353 6.353a4.235 4.235 0 1 1-8.47 0 4.235 4.235 0 0 1 8.47 0Zm-4.235 2.117a2.118 2.118 0 1 0 0-4.235 2.118 2.118 0 0 0 0 4.235Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default WalletYellowSvgComponent;
