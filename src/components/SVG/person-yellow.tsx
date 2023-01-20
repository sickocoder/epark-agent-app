import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PersonYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.3}
      d="M8 12c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2ZM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#F3CD3D"
    />
    <Path
      d="M8 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H2Zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default PersonYellowSvgComponent;
