import { Box, Typography } from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import { ThemedComponent } from '../../../../types';
import { SlotInfoProps } from './slot-details.types';

const RedSlotInfo: ThemedComponent<SlotInfoProps> = ({
  theme: { palette, fonts },
  iconComponent: IconComponent,
  label,
  value,
}) => (
  <Box>
    <Box marginBottom="4px">
      <Typography color={palette.common.gray2}>{label}</Typography>
    </Box>
    <Box flexDirection="row" alignItems="center">
      <IconComponent />
      <Box width="8px" />
      <Typography
        fontFamily={fonts.poppings.Poppins_600SemiBold}
        fontSize="22px"
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

export default withAppTheme(RedSlotInfo);
