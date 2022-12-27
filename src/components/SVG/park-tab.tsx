import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const ParkTabSvgComponent = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#515B55" fillOpacity={0.1} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.03 30.931C16.518 28.742 10 22.594 10 17.75c0-6 4-10 10-10s10 5 10 10c0 4.06-6.59 10.754-9.07 13.13a1.4 1.4 0 0 1-1.9.051Zm4.304-14.514a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
      fill="#8C9096"
    />
  </Svg>
);

export default ParkTabSvgComponent;
