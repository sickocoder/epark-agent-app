import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const DoneSvgComponent = (props: SvgProps) => (
  <Svg
    width={77}
    height={63}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M67.907 2.556a5.125 5.125 0 1 1 7.81 6.638l-43.562 51.25a5.125 5.125 0 0 1-7.31.511l-23.062-20.5a5.125 5.125 0 1 1 6.81-7.66l19.145 17.018 40.17-47.257Z"
      fill="#2ECB70"
    />
  </Svg>
);

export default DoneSvgComponent;
