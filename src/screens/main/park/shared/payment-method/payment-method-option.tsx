import { TouchableOpacity } from 'react-native';

import { Box, Spacer, Typography } from '../../../../../components';
import { withAppTheme } from '../../../../../components/HOC';
import { ThemedComponent } from '../../../../../types';
import { TPaymentMethodOption } from './payment-method.types';

const PaymentMethodOption: ThemedComponent<
  TPaymentMethodOption & {
    selected: boolean;
    onOptionSelect: (option: TPaymentMethodOption) => void;
  }
> = ({
  theme: { palette, fonts },
  icon,
  selectedIcon,
  label,
  value,
  enabled,
  onOptionSelect,
  selected,
}) => {
  const color = selected ? palette.primary : palette.border.lightGray;
  const Icon = selected ? selectedIcon : icon;

  return (
    <TouchableOpacity
      style={{ flex: 1, opacity: enabled ? 1 : 0.7 }}
      onPress={() => {
        if (enabled) {
          onOptionSelect({ icon, selectedIcon, label, value, enabled });
        }
      }}
    >
      <Box
        flex={1}
        flexDirection="column"
        alignItems="flex-start"
        border={`1.5px solid ${color}`}
        borderRadius="8px"
        paddingHorizontal="8px"
        paddingVertical="8px"
      >
        <Box
          border={`1.5px solid ${color}`}
          width="16px"
          height="16px"
          borderRadius="16px"
          paddingHorizontal="2px"
          paddingVertical="2px"
        >
          {selected && (
            <Box flex={1} background={palette.primary} borderRadius="16px" />
          )}
        </Box>

        <Spacer />
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          paddingBottom="4px"
        >
          <Icon />
          <Box width="6px" />
          <Typography
            fontSize="16px"
            color={palette.common.gray2}
            fontFamily={fonts.poppings.Poppins_800ExtraBold}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default withAppTheme(PaymentMethodOption);
