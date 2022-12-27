import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const LocationYellowSvgComponent = (props: SvgProps) => (
  <Svg
    width={16}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.5 8.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3-.34-.31C3.6 13.99 1.5 10.77 1.5 8.2c0-3.84 2.82-6.7 6.5-6.7s6.5 2.85 6.5 6.7Z"
      fill="#F3CD3D"
      fillOpacity={0.3}
    />
    <Path
      d="M8 9c1.33 0 4 .67 4 2v.16A5.284 5.284 0 0 1 8 13c-1.6 0-3.03-.72-4-1.84V11c0-1.33 2.67-2 4-2Zm0-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6 .2C14 4.57 11.35 2 8 2S2 4.57 2 8.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14ZM8 0c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C0 3.22 3.8 0 8 0Z"
      fill="#F3CD3D"
    />
  </Svg>
);

export default LocationYellowSvgComponent;
