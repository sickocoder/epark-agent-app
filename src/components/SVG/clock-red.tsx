import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const ClockRedSvgComponent = (props: SvgProps) => (
  <Svg
    width={37}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#2ECB70">
      <Path
        opacity={0.3}
        d="M18.5 6.167c-6.814 0-12.333 5.519-12.333 12.333s5.52 12.333 12.333 12.333c6.814 0 12.334-5.519 12.334-12.333S25.314 6.166 18.5 6.166Zm6.552 18.73-8.093-4.855v-9.25h2.312v8.093l6.938 4.116-1.157 1.897Z"
      />
      <Path d="M18.484 3.083C9.974 3.083 3.083 9.99 3.083 18.5s6.891 15.417 15.401 15.417c8.526 0 15.432-6.907 15.432-15.417S27.01 3.084 18.484 3.084Zm.016 27.75c-6.815 0-12.334-5.519-12.334-12.333S11.686 6.167 18.5 6.167 30.833 11.686 30.833 18.5 25.313 30.834 18.5 30.834Zm.77-20.041h-2.312v9.25l8.094 4.856 1.156-1.896-6.938-4.116v-8.094Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h37v37H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ClockRedSvgComponent;
