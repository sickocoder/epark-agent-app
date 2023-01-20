import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CaretLeftSvgComponent = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m8.125 15 9.081 10.445a1.25 1.25 0 1 1-1.912 1.61L5.556 16.243a1.875 1.875 0 0 1 .069-2.493L15.34 2.893a1.25 1.25 0 0 1 1.82 1.714L8.125 15Z"
      fill="#17251D"
    />
  </Svg>
);

export default CaretLeftSvgComponent;
