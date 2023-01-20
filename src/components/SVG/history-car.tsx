import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const HistoryCarSvgComponent = (props: SvgProps) => (
  <Svg
    width={14}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#17251D" fillOpacity={0.3} d="M1.5 6h11v4h-11z" />
    <Path
      d="M3 8h8"
      stroke="#17251D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.19 1.508A1.12 1.12 0 0 0 11.125.75h-8.25c-.495 0-.907.315-1.065.758L.25 6v6c0 .412.338.75.75.75h.75c.413 0 .75-.338.75-.75v-.75h9V12c0 .412.338.75.75.75H13c.412 0 .75-.338.75-.75V6l-1.56-4.492Zm-9.052.742h7.717l.81 2.332H2.328l.81-2.332Zm9.112 7.5H1.75V6h10.5v3.75Z"
      fill="#17251D"
    />
  </Svg>
);

export default HistoryCarSvgComponent;
