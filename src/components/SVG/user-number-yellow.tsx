import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const UserNumberYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 13.5h4V12h-4v1.5Zm0 3h4V15h-4v1.5ZM20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-9-3h2v5h-2V4Zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11ZM9 15c.83 0 1.5-.67 1.5-1.5S9.83 12 9 12s-1.5.67-1.5 1.5S8.17 15 9 15Zm2.08 1.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39Z"
      fill="#F3CD3D"
    />
    <Path
      opacity={0.3}
      d="M13 11h-2c-1.1 0-2-.9-2-2H4v11h16V9h-5c0 1.1-.9 2-2 2Zm-4 1c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12Zm3 6H6v-.43c0-.6.36-1.15.92-1.39.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39V18Zm6-1.5h-4V15h4v1.5Zm0-3h-4V12h4v1.5Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default UserNumberYellowSvgComponent;
