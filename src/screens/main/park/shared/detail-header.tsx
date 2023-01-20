import { useNavigation } from '@react-navigation/native';
import ExpoConstants from 'expo-constants';
import { TouchableOpacity } from 'react-native';

import { Box, Typography } from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import { NavigateBackSvgComponent } from '../../../../components/SVG';
import { ThemedComponent } from '../../../../types';

interface SlotDetailHeaderProps {
  title: string;
  slotId: string;
  slotName: string;
}

const SlotDetailHeader: ThemedComponent<SlotDetailHeaderProps> = ({
  theme: { fonts, palette },
  title,
  slotId,
  slotName,
}) => {
  const navigation = useNavigation();

  return (
    <Box paddingTop={`${ExpoConstants.statusBarHeight + 10}px`}>
      <Box
        paddingHorizontal="5%"
        flexDirection="row"
        justifyContent="flex-start"
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Box marginTop="10px" flexDirection="row" alignItems="center">
            <NavigateBackSvgComponent />
            <Box width="10px" />
            <Typography
              fontFamily={fonts.inter.Inter_600SemiBold}
              fontSize="16px"
              color={palette.common.gray2}
            >
              Cancelar
            </Typography>
          </Box>
        </TouchableOpacity>
      </Box>

      <Box
        paddingHorizontal="5%"
        paddingVertical="32px"
        flexDirection="column"
        center
      >
        <Typography
          fontFamily={fonts.poppings.Poppins_800ExtraBold}
          fontSize="28px"
        >
          {title}
        </Typography>
        <Box flexDirection="row" paddingTop="16px">
          <Box
            paddingVertical="4px"
            paddingHorizontal="12px"
            border="2px solid #515B55"
            borderRadius="200px"
            marginRight="8px"
          >
            <Typography
              fontSize="12px"
              fontFamily={fonts.inter.Inter_600SemiBold}
              color={palette.common.gray2}
            >
              ID: {slotId}
            </Typography>
          </Box>

          <Box
            paddingVertical="4px"
            paddingHorizontal="12px"
            borderRadius="200px"
            background={palette.border.lightGray}
            border={`2px solid ${palette.border.lightGray}`}
          >
            <Typography
              fontSize="13px"
              fontFamily={fonts.inter.Inter_600SemiBold}
            >
              {slotName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withAppTheme(SlotDetailHeader);
