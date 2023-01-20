import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PhoneYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={14}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path opacity={0.3} d="M2 3h10v14H2V3Z" fill="#F3CD3D" />
    <Path
      d="M11 0H3C1.34 0 0 1.34 0 3v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3ZM9 20H5v-1h4v1Zm3-3H2V3h10v14Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default PhoneYellowSvgComponent;
