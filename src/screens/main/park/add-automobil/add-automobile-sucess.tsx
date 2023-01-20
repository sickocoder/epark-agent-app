import { StackActions } from '@react-navigation/native';
import * as Print from 'expo-print';
import { Timestamp } from 'firebase/firestore';
import moment from 'moment';
import { useContext, useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import uuid from 'react-native-uuid';

import {
  Box,
  Button,
  ShadowView,
  Spacer,
  Typography,
} from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import {
  CallendarYellowSvgComponent,
  CarYellowSvgComponent,
  DoneSvgComponent,
  PrintWhiteSvgComponent,
  UserNumberYellowSvgComponent,
  UserYellowSvgComponent,
} from '../../../../components/SVG';
import { UserContext } from '../../../../context';
import { useNotification, useRouteWithSlot } from '../../../../hooks';
import { ThemedComponent, TMobile } from '../../../../types';
import { makeEnterRecieptTemplate } from '../../../../utils/print';
import { getParkedTimeIntervalInMinutes } from '../../../../utils/time';
import { InfoPanelItemProps } from '../close-out/close-out.types';
import { SlotDetailHeader } from '../shared';

const InfoPanelItem: ThemedComponent<InfoPanelItemProps> = withAppTheme(
  ({ theme: { palette, fonts }, info }) => (
    <Box background={palette.common.yellowLight}>
      <Box paddingVertical="16px" paddingHorizontal="16px" borderRadius="8px">
        <Box marginBottom="4px">
          <Typography color={palette.common.gray2}>{info.label}</Typography>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <info.icon />
          <Box width="8px" />
          <Box marginTop="4px">
            <Typography
              fontFamily={fonts.poppings.Poppins_600SemiBold}
              fontSize="18px"
            >
              {info.value}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
);

const AddAutomobileSuccessScreen: ThemedComponent = ({
  theme: { palette, fonts },
}) => {
  const { notificationCenter } = useNotification();
  const { user } = useContext(UserContext);
  const {
    params: { slot },
  } = useRouteWithSlot();

  const mobile = useMemo(() => slot.mobil as unknown as TMobile, [slot.mobil]);

  const [isPrinting, setIsPrinting] = useState(false);
  const [hasPrinted, setHasPrinted] = useState(false);

  const print = async () => {
    const receiptInfo = {
      id: uuid.v4().toString().toUpperCase(),
      operatorId: user ? user.uid : '',
      park: slot.park,
      mobile: {
        type: mobile.type,
        licensePlate: mobile.licensePlate,
        enterDate: moment(mobile.enterTime.toDate().toUTCString()).format(
          'DD/MM/YYYY, HH:mm'
        ),
        outDate: moment().format('DD/MM/YYYY, HH:mm'),
      },
      bill: `${
        getParkedTimeIntervalInMinutes(
          mobile.enterTime.toDate().toUTCString(),
          Timestamp.now().toDate().toUTCString()
        ) * 10
      } kz`,
    };

    try {
      setIsPrinting(true);

      const html = makeEnterRecieptTemplate(receiptInfo);
      await Print.printAsync({
        html,
      });

      setHasPrinted(true);
    } catch (error) {
      notificationCenter.showNotification({
        message: 'Impressão Cancelada',
        description:
          'Infelizmente a impressão não foi feita, volte por favor a tentar.',
        variant: 'danger',
        closeAfter: 3000,
      });
    } finally {
      setIsPrinting(false);
    }
  };

  return (
    <Box flex={1} background={palette.common.white}>
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
        <Box flex={1} paddingHorizontal="5%">
          <Box flex={1}>
            <ShadowView>
              <Box center>
                <Box
                  center
                  width="130px"
                  height="130px"
                  borderRadius="100px"
                  marginBottom="32px"
                  background="rgba(46, 203, 112, 0.1)"
                >
                  <DoneSvgComponent />
                </Box>
              </Box>

              <Box flex={1}>
                <Box center flexDirection="column">
                  <Typography
                    color={palette.common.gray2}
                    fontSize="13px"
                    fontFamily={fonts.inter.Inter_500Medium}
                  >
                    Clique em imprimir para gerar a ficha
                  </Typography>
                  <Typography
                    fontSize="15px"
                    fontFamily={fonts.inter.Inter_600SemiBold}
                  >
                    Entrada no estacionamento
                  </Typography>
                </Box>

                <Box paddingTop="16px">
                  <InfoPanelItem
                    info={{
                      label: 'Hora de entrada',
                      value: moment(mobile.enterTime.toDate()).format(
                        'DD/MM/YYYY, hh:mm'
                      ),
                      icon: CallendarYellowSvgComponent,
                    }}
                  />
                  <Box height="12px" />
                  <InfoPanelItem
                    info={{
                      label: 'Nome do proprietário',
                      value: mobile.ownerName,
                      icon: UserYellowSvgComponent,
                    }}
                  />
                  <Box height="12px" />
                  <InfoPanelItem
                    info={{
                      label: 'Matrícula do carro',
                      value: mobile.licensePlate,
                      icon: CarYellowSvgComponent,
                    }}
                  />

                  <Box height="12px" />
                  <InfoPanelItem
                    info={{
                      label: 'Numero da carta',
                      value: mobile.licenseRegistrationNumber,
                      icon: UserNumberYellowSvgComponent,
                    }}
                  />
                </Box>

                <Spacer />
              </Box>
            </ShadowView>
          </Box>
        </Box>
      </ScrollView>
      <Box paddingHorizontal="5%" paddingBottom="20px">
        <Button
          disabled={isPrinting}
          loading={isPrinting}
          variant="secondary"
          onPress={() => {
            if (hasPrinted) {
              StackActions.popToTop();
            }
            print();
          }}
        >
          <Box flexDirection="row" center>
            {hasPrinted ? (
              <Typography
                color={palette.common.white}
                fontSize="16px"
                fontWeight="600"
              >
                Finalizar
              </Typography>
            ) : (
              <>
                <Typography
                  color={palette.common.white}
                  fontSize="16px"
                  fontWeight="600"
                >
                  Imprimir ficha
                </Typography>
                <Box marginLeft="8px">
                  <PrintWhiteSvgComponent />
                </Box>
              </>
            )}
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default withAppTheme(AddAutomobileSuccessScreen);
