import { useNavigation } from '@react-navigation/native';
import {
  DocumentData,
  DocumentReference,
  getDoc,
  Timestamp,
} from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import {
  Box,
  Button,
  ScreenContainer,
  ShadowView,
} from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import {
  CallendarYellowSvgComponent,
  ClockRedSvgComponent,
} from '../../../../components/SVG';
import { ScreensEnum } from '../../../../constants';
import { useRouteWithSlot } from '../../../../hooks';
import { ThemedComponent, TMobile } from '../../../../types';
import {
  getParkedTimeFormatted,
  getParkedTimeInterval,
} from '../../../../utils/time';
import { CircleAutomobile, SlotDetailHeader } from '../shared';
import { ILLUSTRATIONS } from '../shared/shared-helpers';
import RedSlotInfo from '../shared/slot-red-info';
import SlotYellowInfo from '../shared/slot-yellow-info';

const SlotDetailsScreen: ThemedComponent = ({ theme: { palette, fonts } }) => {
  const [mobile, setMobile] = useState<TMobile>(null);
  const [parkedTime, setParkedTime] = useState('00:00');

  const navigation = useNavigation();
  const route = useRouteWithSlot();
  const { slot } = route.params;

  const getParkedTime = useCallback(() => {
    if (!mobile) return;

    const parkedTimeString = getParkedTimeFormatted(
      getParkedTimeInterval(
        mobile.enterTime.toDate().toUTCString(),
        Timestamp.now().toDate().toUTCString()
      )
    );

    setParkedTime(parkedTimeString);
  }, [mobile]);

  useEffect(() => {
    (async () => {
      if (!slot.mobil) return;

      const snapshot = await getDoc(
        slot.mobil as unknown as DocumentReference<DocumentData>
      );
      if (!snapshot.exists) return;

      const mobileData = snapshot.data() as unknown as TMobile;
      setMobile(mobileData);
    })();

    setInterval(getParkedTime, 1000);
  }, [getParkedTime, slot.mobil]);

  if (!mobile) return null;

  return (
    <ScreenContainer withSafeArea>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: palette.common.white,
          paddingBottom: 120, // to avoid bottomBar cut out
        }}
        horizontal={false}
        stickyHeaderHiddenOnScroll
      >
        <SlotDetailHeader
          title="Veículo"
          slotId={slot.slotId}
          slotName={slot.name}
        />
        <Box paddingHorizontal="5%" flex={1}>
          <ShadowView>
            <Box center>
              <CircleAutomobile asset={ILLUSTRATIONS[mobile.type]} />
            </Box>

            {mobile && (
              <>
                <RedSlotInfo
                  label="Tempo no estacionamento"
                  value={parkedTime}
                  iconComponent={ClockRedSvgComponent as any}
                />
                <Box height="24px" />

                <SlotYellowInfo
                  label="Data e hora de entrada"
                  value={`${mobile.enterTime
                    .toDate()
                    .toLocaleDateString()}, ${mobile.enterTime
                    .toDate()
                    .toLocaleTimeString()}`}
                  iconComponent={CallendarYellowSvgComponent as any}
                />
                <Box height="12px" />

                <SlotYellowInfo
                  label="Nome do proprietário"
                  value={mobile.ownerName}
                  iconComponent={CallendarYellowSvgComponent as any}
                />
                <Box height="12px" />

                <SlotYellowInfo
                  label="Matrícula do veículo"
                  value={mobile.licensePlate}
                  iconComponent={CallendarYellowSvgComponent as any}
                />
                <Box height="12px" />

                <SlotYellowInfo
                  label="Numero da carta"
                  value={mobile.licenseRegistrationNumber}
                  iconComponent={CallendarYellowSvgComponent as any}
                />
                <Box height="12px" />
              </>
            )}
          </ShadowView>
        </Box>
      </ScrollView>
      <Box height="56px" paddingHorizontal="5%">
        <Button
          variant="secondary"
          onPress={() => {
            navigation.navigate(
              ScreensEnum.main.closeOut as unknown as never,
              {
                slot,
              } as unknown as never
            );
          }}
        >
          Marcar Saida
        </Button>
      </Box>
    </ScreenContainer>
  );
};

export default withAppTheme(SlotDetailsScreen);
