import { FC } from 'react';

import Box from '../box';

const Dash: FC<{ width: number; background: string }> = ({
  width,
  background,
}) => (
  <Box flexDirection="row">
    {(() => {
      const blockWidth = 8;
      const blockSpacing = 8;
      const n = Math.ceil(width / (blockWidth + blockSpacing));

      const dashes = Array.from(Array(n).keys());

      return dashes.map((block) => (
        <Box
          key={String(block)}
          width={`${blockWidth}px`}
          height="3px"
          background={background}
          marginLeft={`${blockSpacing}px`}
        />
      ));
    })()}
  </Box>
);

export default Dash;
