import moment from 'moment';

import { Box, Image, Typography } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import {
  HistoryCarSvgComponent,
  HistoryClockSvgComponent,
} from '../../../components/SVG';
import { ThemedComponent } from '../../../types';
import { ILLUSTRATIONS } from '../park/shared/shared-helpers';
import { HistoryProps } from './history.types';

const HistoryItem: ThemedComponent<HistoryProps> = ({
  theme: { palette, fonts },
  data,
}) => (
  <Box flexDirection="row" alignItems="center">
    <Box
      width="90px"
      height="90px"
      borderRadius="8px"
      center
      background={palette.common.gray3}
    >
      <Image asset={ILLUSTRATIONS[data.mobile.type]} height={50} />
    </Box>
    <Box flexDirection="column" marginLeft="10px" flex={1}>
      <Box
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="8px"
        paddingVertical="8px"
        borderRadius="8px"
        background={palette.common.gray3}
      >
        <HistoryCarSvgComponent />
        <Box width="6px" />
        <Typography fontSize="13px" fontFamily={fonts.inter.Inter_600SemiBold}>
          {data.mobile.licensePlate}
        </Typography>
      </Box>

      <Box height="8px" />

      <Box
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="8px"
        paddingVertical="8px"
        borderRadius="8px"
        background={palette.common.gray3}
      >
        <HistoryClockSvgComponent />
        <Box width="6px" />
        <Typography fontSize="13px" fontFamily={fonts.inter.Inter_600SemiBold}>
          {`${moment(data.mobile.outDate.split(',')[0], 'DD/MM/YYYY').format(
            'ddd. DD,'
          )}${data.mobile.enterDate.split(',')[1]} - ${
            data.mobile.outDate.split(',')[1]
          }`}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default withAppTheme(HistoryItem);
