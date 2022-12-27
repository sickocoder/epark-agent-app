import { Box, Typography } from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import { ThemedComponent } from '../../../../types';
import { SlotInfoProps } from './slot-details.types';

const SlotYellowInfo: ThemedComponent<SlotInfoProps> = ({
  theme: { palette, fonts },
  iconComponent: IconComponent,
  label,
  value,
  background = '#FFFCF1',
}) => (
  <Box
    background={background}
    paddingVertical="16px"
    paddingHorizontal="16px"
    borderRadius="8px"
  >
    <Box marginBottom="4px">
      <Typography color={palette.common.gray2}>{label}</Typography>
    </Box>
    <Box flexDirection="row" alignItems="center">
      <IconComponent />
      <Box width="8px" />
      <Typography
        fontFamily={fonts.poppings.Poppins_600SemiBold}
        fontSize="17px"
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

export default withAppTheme(SlotYellowInfo);
