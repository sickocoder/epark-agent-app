import { FC } from 'react';

import { Box, Typography } from '../../../../components';
import { AssetsEnum } from '../../../../constants';
import HomeMainContentCard from './home-main-content-card';

const HomeMainContent: FC = () => (
  <Box>
    <Typography>Adicionado recentemente</Typography>
    <HomeMainContentCard imageAsset={AssetsEnum.images.carIllustration} />
    <HomeMainContentCard imageAsset={AssetsEnum.images.motoIllustration} />
  </Box>
);

export default HomeMainContent;
