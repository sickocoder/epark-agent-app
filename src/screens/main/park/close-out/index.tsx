import { useNavigation } from '@react-navigation/native';
import { DocumentData, DocumentReference, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  ShadowView,
  Spacer,
  Typography,
} from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import { ScreensEnum } from '../../../../constants';
import { useRouteWithSlot } from '../../../../hooks';
import { ThemedComponent, TMobile } from '../../../../types';
import { CircleAutomobile, SlotDetailHeader } from '../shared';
import PaymentMethod from '../shared/payment-method';
import { paymentOptions } from '../shared/payment-method/payment-method.data';
import { TPaymentMethodOption } from '../shared/payment-method/payment-method.types';
import { ILLUSTRATIONS } from '../shared/shared-helpers';

const CloseOutScreen: ThemedComponent = ({ theme: { palette, fonts } }) => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState<TMobile>(null);
  const {
    params: { slot },
  } = useRouteWithSlot();

  const [selectedOption, setSelectedOption] = useState<TPaymentMethodOption>(
    paymentOptions[0]
  );

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
        <ShadowView>
          <Box center>
            <CircleAutomobile asset={ILLUSTRATIONS.car} />
          </Box>
          <Box flex={1}>
            <Box center flexDirection="column">
              <Typography
                color={palette.common.gray2}
                fontSize="13px"
                fontFamily={fonts.inter.Inter_500Medium}
              >
                Saída do estacionamento
              </Typography>
              <Typography
                fontSize="15px"
                fontFamily={fonts.inter.Inter_600SemiBold}
              >
                Escolha o método de pagamento
              </Typography>
            </Box>

            <PaymentMethod
              selectedOption={selectedOption}
              onOptionSelected={setSelectedOption}
            />
            <Spacer />

            <Button
              disabled={!selectedOption}
              variant="secondary"
              onPress={() => {
                if (!selectedOption) {
                  return;
                }

                if (selectedOption.value === 'cash') {
                  navigation.navigate(
                    ScreensEnum.main.paymentDone as unknown as never,
                    { slot } as unknown as never
                  );

                  return;
                }

                navigation.navigate(
                  ScreensEnum.main.askNumber as unknown as never,
                  { slot } as unknown as never
                );
              }}
            >
              Continuar
            </Button>
          </Box>
        </ShadowView>
      </Box>
    </Box>
  );
};

export default withAppTheme(CloseOutScreen);
