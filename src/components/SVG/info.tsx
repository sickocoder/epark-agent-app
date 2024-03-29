import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const InfoSvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.3}
      d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Zm1 13h-2v-6h2v6Zm0-8h-2V7h2v2Z"
      fill="#8C9096"
    />
    <Path
      d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
      fill="#8C9096"
    />
  </Svg>
);

export default InfoSvgComponent;
