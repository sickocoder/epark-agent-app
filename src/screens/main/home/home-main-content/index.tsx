import { FC } from 'react';

import { Box, Typography } from '../../../../components';
import { useGetSlots } from '../../../../hooks';
import HomeMainContentCard from './home-main-content-card';

const HomeMainContent: FC = () => {
  const { slots } = useGetSlots();

  return (
    <Box>
      <Typography>Adicionado recentemente</Typography>
      {slots.map((slot) => (
        <HomeMainContentCard key={slot.slotId} slotInfo={slot} />
      ))}
    </Box>
  );
};

export default HomeMainContent;
