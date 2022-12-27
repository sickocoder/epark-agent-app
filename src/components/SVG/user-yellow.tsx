import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const UserYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.3}
      d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12a9.947 9.947 0 0 1 12.28 0A7.957 7.957 0 0 0 20 12c0-4.42-3.58-8-8-8Zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13Z"
      fill="#F3CD3D"
    />
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17c1.74 0 3.34.56 4.65 1.5-1.31.94-2.91 1.5-4.65 1.5Zm6.14-2.88a9.947 9.947 0 0 0-12.28 0A7.957 7.957 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12Z"
      fill="#F3CD3D"
    />
    <Path
      d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5Zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default UserYellowSvgComponent;
