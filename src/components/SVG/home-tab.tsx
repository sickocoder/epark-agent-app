import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const HomeTabSvgComponent = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.333}
      y={0.333}
      width={9.333}
      height={9.333}
      rx={1.5}
      fill="#8C9096"
    />
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.333 1.833a1.5 1.5 0 0 1 1.5-1.5h6.334a1.5 1.5 0 0 1 1.5 1.5v6.334a1.5 1.5 0 0 1-1.5 1.5h-6.334a1.5 1.5 0 0 1-1.5-1.5V1.833Zm-12 12a1.5 1.5 0 0 1 1.5-1.5h6.334a1.5 1.5 0 0 1 1.5 1.5v6.334a1.5 1.5 0 0 1-1.5 1.5H1.833a1.5 1.5 0 0 1-1.5-1.5v-6.334Zm13.5-1.5a1.5 1.5 0 0 0-1.5 1.5v6.334a1.5 1.5 0 0 0 1.5 1.5h6.334a1.5 1.5 0 0 0 1.5-1.5v-6.334a1.5 1.5 0 0 0-1.5-1.5h-6.334Z"
      fill="#8C9096"
    />
  </Svg>
);

export default HomeTabSvgComponent;
