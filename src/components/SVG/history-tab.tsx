import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const HistoryTabSvgComponent = (props: SvgProps) => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.333}
      y={0.667}
      width={21.333}
      height={4}
      rx={1.5}
      fill="#8C9096"
    />
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.833 7.333a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h10.334a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H1.833Zm0 6.667a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h18.334a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H1.833Z"
      fill="#8C9096"
    />
  </Svg>
);

export default HistoryTabSvgComponent;
