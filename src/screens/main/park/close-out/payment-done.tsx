import { StackActions } from '@react-navigation/native';
import * as Print from 'expo-print';
import {
  addDoc,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
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
  ClockYellowSvgComponent,
  DoneSvgComponent,
  PrintWhiteSvgComponent,
  WalletYellowSvgComponent,
} from '../../../../components/SVG';
import { UserContext } from '../../../../context';
import { makeFirestoreService } from '../../../../factories';
import { useNotification, useRouteWithSlot } from '../../../../hooks';
import { ThemedComponent, TMobile } from '../../../../types';
import { getPricing } from '../../../../utils/money';
import { makeRecietTemplate } from '../../../../utils/print';
import {
  getParkedTimeFormatted,
  getParkedTimeInterval,
  getParkedTimeIntervalInMinutes,
} from '../../../../utils/time';
import { SlotDetailHeader } from '../shared';
import { InfoPanelItemProps } from './close-out.types';

const InfoPanelItem: ThemedComponent<InfoPanelItemProps> = withAppTheme(
  ({ theme: { palette, fonts }, info }) => (
    <Box>
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
              fontSize="26px"
            >
              {info.value}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
);

const PaymentDoneScreen: ThemedComponent = ({ theme: { palette, fonts } }) => {
  const { notificationCenter } = useNotification();
  const { user } = useContext(UserContext);
  const {
    params: { slot },
  } = useRouteWithSlot();

  const [isPrinting, setIsPrinting] = useState(false);
  const [hasPrinted, setHasPrinted] = useState(false);
  const [mobile, setMobile] = useState<TMobile>(null);

  const print = async () => {
    const enterDate = moment(mobile.enterTime.toDate().toUTCString());
    const outDate = moment();

    const bill = getPricing(enterDate, outDate);

    const receiptInfo = {
      id: uuid.v4().toString().toUpperCase(),
      operatorId: user ? user.uid : '',
      park: slot.park,
      mobile: {
        type: mobile.type,
        licensePlate: mobile.licensePlate,
        enterDate: enterDate.format('DD/MM/YYYY, HH:mm'),
        outDate: outDate.format('DD/MM/YYYY, HH:mm'),
      },
      bill: `${bill > 0 ? `${bill}kz` : 'Grátis'}`,
    };

    try {
      setIsPrinting(true);

      try {
        const service = makeFirestoreService();

        await addDoc(service.getCollection('history'), {
          ...receiptInfo,
          slotPath: slot.path,
        });

        const documentReference = doc(service.db, slot.path);

        await updateDoc(documentReference, {
          isAvailabel: true,
        });
      } catch (error) {
        notificationCenter.showNotification({
          message: 'Erro Ao Salvar Os Dados',
          closeAfter: 3000,
        });
      }

      const html = makeRecietTemplate(receiptInfo);
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
  }, [slot.mobil]);

  if (!mobile) {
    return null;
  }

  return (
    <Box flex={1} background={palette.common.white}>
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
                  Pagamento concluído
                </Typography>
              </Box>

              <Box flexDirection="row" center paddingTop="16px">
                <InfoPanelItem
                  info={{
                    label: 'Tempo',
                    value: getParkedTimeFormatted(
                      getParkedTimeInterval(
                        mobile.enterTime.toDate().toUTCString(),
                        Timestamp.now().toDate().toUTCString()
                      )
                    ),
                    icon: ClockYellowSvgComponent,
                  }}
                />
                <Box
                  width="2px"
                  height="36px"
                  marginTop="20px"
                  background="rgba(0, 0, 0, 0.1)"
                />
                <InfoPanelItem
                  info={{
                    label: 'Valor pago',
                    value: `${
                      getParkedTimeIntervalInMinutes(
                        mobile.enterTime.toDate().toUTCString(),
                        Timestamp.now().toDate().toUTCString()
                      ) * 10
                    } kz`,
                    icon: WalletYellowSvgComponent,
                  }}
                />
              </Box>

              <Spacer />
              <Button
                disabled={isPrinting}
                loading={isPrinting}
                variant="secondary"
                onPress={() => {
                  if (hasPrinted) {
                    StackActions.popToTop();
                    return;
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
          </ShadowView>
        </Box>
      </Box>
    </Box>
  );
};

export default withAppTheme(PaymentDoneScreen);
