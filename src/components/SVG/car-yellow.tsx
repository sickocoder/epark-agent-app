import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CarYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={18}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#F3CD3D" fillOpacity={0.3} d="M1.667 7h14.667v5.333H1.667z" />
    <Path
      d="M3.667 9.667h10.666"
      stroke="#F3CD3D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.92 1.01C15.72.42 15.16 0 14.5 0h-11c-.66 0-1.21.42-1.42 1.01L0 7v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V7l-2.08-5.99ZM3.85 2h10.29l1.08 3.11H2.77L3.85 2ZM16 12H2V7h14v5Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default CarYellowSvgComponent;
