import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CaretRightSvgComponent = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.875 15 12.794 4.555a1.25 1.25 0 1 1 1.912-1.61l9.738 10.812c.613.728.583 1.8-.069 2.493L14.66 27.107a1.25 1.25 0 1 1-1.82-1.714L21.875 15Z"
      fill="#17251D"
    />
  </Svg>
);

export default CaretRightSvgComponent;
