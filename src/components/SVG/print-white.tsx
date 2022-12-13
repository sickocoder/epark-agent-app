import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const PrintWhiteSvgComponent = (props: SvgProps) => (
  <Svg
    width={19}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-14ZM15 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3.5 3h-4v6h4v-6Z"
      fill="#fff"
    />
    <Rect opacity={0.3} x={5.5} width={8} height={2} rx={1} fill="#fff" />
  </Svg>
);

export default PrintWhiteSvgComponent;
