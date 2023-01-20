import { DocumentData, DocumentReference, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import { AssetsEnum } from '../../constants';
import useNotification from '../../hooks/use-notification';
import { ThemedComponent, TMobile } from '../../types';
import Box from '../box';
import DashedLine from '../dash';
import { withAppTheme } from '../HOC';
import Image from '../image';
import Typography from '../typography';
import { ParkItemProps } from './park-item.types';

export const MOBILE_TYPE_TO_IMAGE = {
  car: AssetsEnum.images.parkedCarIllustration,
  moto: AssetsEnum.images.motoIllustration,
  van: AssetsEnum.images.vanIllustration,
};

const ParkItem: ThemedComponent<ParkItemProps> = ({ theme, slot }) => {
  const [mobile, setMobile] = useState<TMobile>(null);
  const { notificationCenter } = useNotification();

  useEffect(() => {
    (async () => {
      try {
        const snapshot = await getDoc(
          slot.mobil as unknown as DocumentReference<DocumentData>
        );
        if (!snapshot.exists) return;

        setMobile(snapshot.data() as TMobile);
      } catch (error) {
        notificationCenter.showNotification({
          message: 'Erro ao carregar as informações',
          variant: 'danger',
        });
      }
    })();
  }, [notificationCenter, slot.mobil]);

  if (!mobile) {
    return (
      <Box marginVertical="10px">
        <DashedLine
          width={Dimensions.get('window').width}
          background={theme.palette.border.lightGray}
        />
        <Box height="100px" background={theme.palette.common.gray3} />
        <DashedLine
          width={Dimensions.get('window').width}
          background={theme.palette.border.lightGray}
        />
      </Box>
    );
  }

  return (
    <Box marginVertical="10px">
      <DashedLine
        width={Dimensions.get('window').width}
        background={theme.palette.border.lightGray}
      />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingVertical="8px"
        paddingHorizontal="5%"
        marginVertical="8px"
      >
        <Image width={120} asset={MOBILE_TYPE_TO_IMAGE[mobile.type]} />
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flexDirection="row" justifyContent="flex-end">
            <Box
              paddingVertical="4px"
              paddingHorizontal="12px"
              border="2px solid #515B55"
              borderRadius="200px"
              marginRight="8px"
            >
              <Typography
                fontSize="12px"
                fontFamily={theme.fonts.inter.Inter_600SemiBold}
                color={theme.palette.common.gray2}
              >
                ID: {slot.slotId}
              </Typography>
            </Box>
          </Box>

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
      <DashedLine
        width={Dimensions.get('window').width}
        background={theme.palette.border.lightGray}
      />
    </Box>
  );
};

export default withAppTheme(ParkItem);
