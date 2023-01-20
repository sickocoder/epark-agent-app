import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const RefPaymentGraySvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      opacity={0.3}
      x={0.333}
      y={0.667}
      width={23.333}
      height={5.833}
      rx={1}
      fill="#515B55"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.833 4.167V18.5a2 2 0 0 0 2 2h1.5V4.167h-3.5Zm7 0V20.5h7.334a2 2 0 0 0 2-2V4.167h-9.334Z"
      fill="#515B55"
    />
  </Svg>
);

export default RefPaymentGraySvgComponent;
