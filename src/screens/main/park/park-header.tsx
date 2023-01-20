import ExpoConstants from 'expo-constants';

import { Box, Typography } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import {
  CaretLeftSvgComponent,
  CaretRightSvgComponent,
} from '../../../components/SVG';
import { ThemedComponent } from '../../../types';

const ParkHeader: ThemedComponent = ({ theme }) => (
  <Box
    paddingTop={`${ExpoConstants.statusBarHeight + 10}px`}
    background={theme.palette.common.white}
  >
    <Box paddingVertical="16px" paddingHorizontal="5%">
      <Typography
        fontFamily={theme.fonts.poppings.Poppins_700Bold}
        fontSize="22px"
      >
        Estacionamentos
      </Typography>
    </Box>
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingVertical="16px"
      paddingHorizontal="15%"
    >
      <Box opacity={0.3}>
        <CaretLeftSvgComponent />
      </Box>
      <Typography
        fontFamily={theme.fonts.poppings.Poppins_700Bold}
        fontSize="16px"
        lineHeight="24px"
      >
        Area 1
      </Typography>
      <CaretRightSvgComponent />
    </Box>
  </Box>
);

export default withAppTheme(ParkHeader);
