import { DocumentData, DocumentReference, getDoc } from 'firebase/firestore';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import { Box, Image, Typography } from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import { MOBILE_TYPE_TO_IMAGE } from '../../../../components/park-item';
import { AssetsEnum } from '../../../../constants';
import { ThemedComponent, TMobile, TParkItem } from '../../../../types';

const HomeMainContentCard: ThemedComponent<{
  slotInfo: TParkItem;
}> = ({ theme, slotInfo }) => {
  const [mobile, setMobile] = useState<TMobile>(null);
  const { fonts, palette } = theme;

  const makePill = (asset: object, text: string) => (
    <Box
      flex={1}
      center
      flexDirection="row"
      background={palette.common.gray3}
      paddingVertical="8px"
      paddingHorizontal="8px"
      borderRadius="8px"
    >
      <Image width={30} asset={asset} />
      <Typography fontSize="14px" fontFamily={fonts.inter.Inter_500Medium}>
        {' '}
        {text}
      </Typography>
    </Box>
  );

  useEffect(() => {
    (async () => {
      if (!slotInfo.mobil) return;

      const snapshot = await getDoc(
        slotInfo.mobil as unknown as DocumentReference<DocumentData>
      );
      if (!snapshot.exists) return;

      const mobileData = snapshot.data() as unknown as TMobile;
      setMobile(mobileData);
    })();
  }, [slotInfo.mobil]);

  if (!mobile) {
    return null;
  }

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
                borderRadius="200px"
              >
                <Typography
                  fontSize="12px"
                  fontFamily={fonts.inter.Inter_600SemiBold}
                  color={palette.common.gray2}
                >
                  ID: {slotInfo.slotId}
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
              <Image height={90} asset={MOBILE_TYPE_TO_IMAGE[mobile.type]} />
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              {makePill(AssetsEnum.icons.littleCarBlack, mobile.licensePlate)}
              <Box width="4px" />
              {makePill(
                AssetsEnum.icons.clockBlack,
                moment(mobile.enterTime.toDate()).format('DD/MM, HH:mm')
              )}
            </Box>
          </Box>
        </View>
      </Shadow>
    </Box>
  );
};

export default withAppTheme(HomeMainContentCard);
