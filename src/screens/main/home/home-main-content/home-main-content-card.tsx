import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import { Box, Image, Typography } from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import { AssetsEnum } from '../../../../constants';
import { ThemedComponent } from '../../../../types';

// TODO: imageAsset is temporary
const HomeMainContentCard: ThemedComponent<{ imageAsset: object }> = ({
  theme,
  imageAsset,
}) => {
  const { fonts, palette } = theme;

  const makePill = (asset: object, text: string) => (
    <Box
      alignItems="center"
      flexDirection="row"
      background={palette.common.gray3}
      paddingVertical="8px"
      paddingHorizontal="16px"
      borderRadius="8px"
    >
      <Image asset={asset} />
      <Typography fontSize="14px" fontFamily={fonts.inter.Inter_500Medium}>
        {' '}
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box marginTop="20px">
      <Shadow
        style={{ width: '100%' }}
        offset={[0, 2]}
        distance={4}
        startColor="rgba(16, 24, 40, 0.07)"
        corners={{
          bottomEnd: true,
          bottomStart: true,
          topStart: true,
          topEnd: true,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            backgroundColor: '#fff',
          }}
        >
          <Box paddingHorizontal="20px" paddingVertical="16px">
            <Box flexDirection="row" justifyContent="flex-end">
              <Box
                paddingVertical="4px"
                paddingHorizontal="16px"
                border="2px solid #515B55"
                borderRadius="100%"
              >
                <Typography
                  fontSize="14px"
                  fontFamily={fonts.inter.Inter_600SemiBold}
                  color={palette.common.gray2}
                >
                  ID: 12S01
                </Typography>
              </Box>
            </Box>
            <Box
              marginVertical="16px"
              height="130px"
              center
              background={palette.common.gray3}
              paddingHorizontal="8px"
              paddingVertical="8px"
              borderRadius="16px"
            >
              <Image asset={imageAsset} />
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              {makePill(AssetsEnum.icons.littleCarBlack, 'LD-51-12-ED')}
              {makePill(AssetsEnum.icons.clockBlack, 'Entrada: 09h')}
            </Box>
          </Box>
        </View>
      </Shadow>
    </Box>
  );
};

export default withAppTheme(HomeMainContentCard);
