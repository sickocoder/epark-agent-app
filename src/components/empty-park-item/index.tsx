import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

import { ThemedComponent } from '../../types';
import Box from '../box';
import DashedLine from '../dash';
import { withAppTheme } from '../HOC';
import Typography from '../typography';
import { EmptyParkItemProps } from './empty-par-item.types';

const EmptyParkItem: ThemedComponent<EmptyParkItemProps> = ({
  theme,
  slot,
}) => (
  <Box marginVertical="10px">
    <DashedLine
      width={Dimensions.get('window').width}
      background={theme.palette.border.lightGray}
    />
    <LinearGradient
      colors={['rgba(255, 90, 98, 0.25)', 'rgba(255, 255, 255, 0.07)']}
      start={[0.0, 0.5]}
      end={[1.0, 0.5]}
      locations={[0.0, 1.0]}
    >
      <Box flexDirection="row">
        <Box height="100%" width="4px" background={theme.palette.common.red} />

        <Box
          flex={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingVertical="8px"
          paddingHorizontal="5%"
          marginVertical="8px"
        >
          <Box height="69px" center>
            <Typography
              fontFamily={theme.fonts.inter.Inter_600SemiBold}
              fontSize="14px"
              color={theme.palette.common.red}
            >
              Clique para adicionar
            </Typography>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              paddingVertical="4px"
              paddingHorizontal="12px"
              borderRadius="200px"
              background={theme.palette.border.lightGray}
              border={`2px solid ${theme.palette.border.lightGray}`}
            >
              <Typography
                fontSize="13px"
                fontFamily={theme.fonts.inter.Inter_600SemiBold}
              >
                {slot.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </LinearGradient>
    <DashedLine
      width={Dimensions.get('window').width}
      background={theme.palette.border.lightGray}
    />
  </Box>
);

export default withAppTheme(EmptyParkItem);
