import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const NavigateBackSvgComponent = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.15}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2.667C8.636 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.333 13.333 13.333 7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333Z"
      fill="#8C9096"
    />
    <Path
      d="M19.57 22.049a1.143 1.143 0 0 1-1.616 1.616l-6.857-6.857a1.143 1.143 0 0 1-.035-1.58l6.286-6.857a1.143 1.143 0 0 1 1.685 1.544l-5.546 6.05 6.083 6.084Z"
      fill="#8C9096"
    />
  </Svg>
);

export default NavigateBackSvgComponent;
