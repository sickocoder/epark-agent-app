import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ClockYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.3}
      d="M15.5 3.167C8.686 3.167 3.167 8.686 3.167 15.5S8.687 27.833 15.5 27.833c6.814 0 12.334-5.519 12.334-12.333S22.314 3.166 15.5 3.166Zm6.552 18.73-8.093-4.855v-9.25h2.312v8.093l6.938 4.117-1.157 1.896Z"
      fill="#F3CD3D"
    />
    <Path
      d="M15.484.083C6.974.083.083 6.99.083 15.5s6.891 15.417 15.401 15.417c8.526 0 15.432-6.907 15.432-15.417S24.01.083 15.484.083Zm.016 27.75c-6.814 0-12.334-5.519-12.334-12.333S8.686 3.167 15.5 3.167 27.833 8.686 27.833 15.5 22.313 27.834 15.5 27.834Zm.77-20.041h-2.312v9.25l8.094 4.856 1.156-1.896-6.938-4.116V7.792Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default ClockYellowSvgComponent;
