import { FC } from 'react';

import { Box, Image } from '../../../../components';

interface CircleAutomobileProps {
  asset: object;
}

const CircleAutomobile: FC<CircleAutomobileProps> = ({ asset }) => (
  <Box
    center
    width="130px"
    height="130px"
    borderRadius="100px"
    marginBottom="32px"
    border="5px solid #2ECB70"
  >
    <Image height={60} asset={asset} />
  </Box>
);

export default CircleAutomobile;
