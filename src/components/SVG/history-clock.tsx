import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const HistoryClockSvgComponent = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.3}
      d="M8 2C4.685 2 2 4.685 2 8s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6Zm3.188 9.113L7.25 8.75v-4.5h1.125v3.938l3.375 2.002-.563.923Z"
      fill="#17251D"
    />
    <Path
      d="M7.992.5C3.853.5.5 3.86.5 8c0 4.14 3.353 7.5 7.492 7.5 4.148 0 7.508-3.36 7.508-7.5 0-4.14-3.36-7.5-7.508-7.5ZM8 14c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm.375-9.75H7.25v4.5l3.938 2.363.562-.923-3.375-2.002V4.25Z"
      fill="#17251D"
    />
  </Svg>
);

export default HistoryClockSvgComponent;
