import { useNavigation, useRoute } from '@react-navigation/native';
import ExpoConstants from 'expo-constants';
import { addDoc, doc, Timestamp, updateDoc } from 'firebase/firestore';
import moment from 'moment';
import { useCallback, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import { Box, Image, Typography } from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import {
  ClockRedSvgComponent,
  NavigateBackSvgComponent,
} from '../../../../components/SVG';
import { ScreensEnum } from '../../../../constants';
import { makeFirestoreService } from '../../../../factories';
import { useNotification } from '../../../../hooks';
import { AnyObject, ThemedComponent, TParkItem } from '../../../../types';
import { supportedAutomobiles } from './add-automobile.helpers';
import { Automobile } from './add-automobile.types';
import AddAutomobileForm from './add-automobile-form';

const AddAutomobileScreen: ThemedComponent = ({
  theme: { palette, fonts },
}) => {
  const { notificationCenter } = useNotification();
  const navigation = useNavigation();
  const route = useRoute();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedAutomobile, setSelectedAutomobile] =
    useState<Automobile>(null);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSelectAutomible = useCallback((automobile: Automobile) => {
    setSelectedAutomobile(automobile);
  }, []);

  const handleAddMobileToSlot = useCallback(
    async (formData: AnyObject) => {
      if (!selectedAutomobile) {
        return;
      }

      const { slot } = route.params as { slot: TParkItem };
      try {
        setIsLoading(true);
        const service = makeFirestoreService();
        const enterTime = Timestamp.now();

        const mobileDocument = await addDoc(
          service.getCollection('automobile'),
          {
            ...formData,
            enterTime,
            type: selectedAutomobile.type,
          }
        );

        const documentReference = doc(service.db, slot.path);

        await updateDoc(documentReference, {
          isAvailabel: false,
          mobil: mobileDocument,
        });

        navigation.navigate(
          ScreensEnum.main.addAutomobileSuccess as unknown as never,
          {
            slot: {
              ...slot,
              mobil: {
                ...formData,
                enterTime,
                type: selectedAutomobile.type,
              },
            },
          } as unknown as never
        );

        // handleGoBack();
      } catch (error) {
        notificationCenter.showNotification({
          message: 'Ocorreu um erro ao cadastrar o veiculo!',
          variant: 'danger',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [navigation, notificationCenter, route.params, selectedAutomobile]
  );

  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={{
        paddingBottom: 120, // to avoid bottomBar cut out
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Box
        flex={1}
        flexDirection="column"
        background={palette.common.white}
        marginTop={`${ExpoConstants.statusBarHeight + 10}px`}
      >
        <Box
          paddingHorizontal="5%"
          flexDirection="row"
          justifyContent="flex-start"
        >
          <TouchableOpacity onPress={handleGoBack}>
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

        <Box paddingVertical="16px" paddingHorizontal="5%" center>
          <Typography
            fontFamily={fonts.poppings.Poppins_700Bold}
            fontSize="22px"
          >
            Adicionar veículo
          </Typography>
        </Box>

        <Box
          paddingHorizontal="5%"
          flexDirection="row"
          justifyContent="space-between"
          height="90px"
        >
          {supportedAutomobiles.map((automobile, index, automobileList) => {
            const color =
              selectedAutomobile &&
              automobile.label === selectedAutomobile.label
                ? palette.primary
                : palette.border.lightGray;

            return (
              <TouchableOpacity
                key={automobile.type}
                onPress={() => handleSelectAutomible(automobile)}
              >
                <Box
                  flex={1}
                  flexDirection="column"
                  alignItems="center"
                  paddingHorizontal="12px"
                  paddingVertical="8px"
                  borderRadius="8px"
                  border={`2px solid ${color}`}
                >
                  <Image
                    style={{ flex: 1 }}
                    aspectRatio={16 / 9}
                    asset={automobile.image}
                  />
                  <Box height="4px" />
                  <Typography
                    fontFamily={fonts.poppings.Poppins_600SemiBold}
                    color={palette.common.gray2}
                  >
                    {automobile.label}
                  </Typography>
                </Box>
                {index < automobileList.length - 1 && <Box width="12px" />}
              </TouchableOpacity>
            );
          })}
        </Box>

        <Box paddingHorizontal="5%" marginTop="20px" flex={1}>
          <Shadow
            style={{ width: '100%', height: '100%' }}
            offset={[0, -6]}
            distance={8}
            startColor="rgba(16, 24, 40, 0.02)"
            corners={{
              bottomEnd: true,
              bottomStart: true,
              topStart: true,
              topEnd: true,
            }}
          >
            <View
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 16,
                backgroundColor: '#fff',
              }}
            >
              <Box
                height="110px"
                background={palette.common.gray3}
                borderRadius="16px"
                marginVertical="16px"
                marginHorizontal="16px"
                center
              >
                {selectedAutomobile ? (
                  <Image
                    height={74}
                    aspectRatio={16 / 9}
                    asset={selectedAutomobile.image}
                  />
                ) : (
                  <Typography
                    color={palette.common.gray2}
                    fontFamily={fonts.inter.Inter_500Medium}
                    fontSize="14px"
                  >
                    Selecione um tipo de veículo
                  </Typography>
                )}
              </Box>

              <Box marginTop="8px" marginHorizontal="16px">
                <Box flexDirection="row" alignItems="center">
                  <ClockRedSvgComponent />
                  <Box width="6px" />
                  <Typography
                    fontSize="15px"
                    fontFamily={fonts.inter.Inter_600SemiBold}
                    color={palette.common.black}
                  >
                    Entrando às: {moment().format('HH:mm')}
                  </Typography>
                </Box>
                <AddAutomobileForm
                  onSubmit={handleAddMobileToSlot}
                  isLoading={isLoading}
                />
              </Box>
            </View>
          </Shadow>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default withAppTheme(AddAutomobileScreen);
