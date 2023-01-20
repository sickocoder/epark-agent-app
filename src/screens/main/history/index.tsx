import ExpoConstants from 'expo-constants';
import moment from 'moment';
import { useContext, useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import { Box, TextInput, Typography } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import { InfoSvgComponent, SearchSvgComponent } from '../../../components/SVG';
import { UserContext } from '../../../context';
import useGetHistory from '../../../hooks/use-get-history';
import { ThemedComponent, TParkingHistory } from '../../../types';
import HistoryItem from './history-item';

const MOBILE_TYPES = [
  {
    label: 'Carro',
    value: 'car',
  },
  { label: 'Moto', value: 'moto' },
  { label: 'Van', value: 'van' },
];

const HistoryScreen: ThemedComponent = ({ theme }) => {
  const { history } = useGetHistory();
  const { user } = useContext(UserContext);

  const [licensePlate, setLicensePalte] = useState('');
  const [selectedType, setSelectedType] = useState<{
    label: string;
    value: string;
  }>({ label: 'all', value: 'all' });

  const filteredHistory = useMemo(() => {
    let filteredData: ReadonlyArray<TParkingHistory> = [];

    if (user) {
      filteredData = history.filter((record) => record.operatorId === user.uid);

      if (selectedType.value !== 'all') {
        filteredData = filteredData.filter(
          (record) => record.mobile.type === selectedType.value
        );
      }

      if (licensePlate !== '') {
        filteredData = filteredData.filter((record) =>
          record.mobile.licensePlate
            .toLowerCase()
            .includes(licensePlate.toLowerCase())
        );
      }
    }

    return filteredData;
  }, [history, licensePlate, selectedType.value, user]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme.palette.common.white,
        paddingBottom: 120, // to avoid bottomBar cut out
      }}
      horizontal={false}
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}
    >
      <Box
        paddingTop={`${ExpoConstants.statusBarHeight + 10}px`}
        background={theme.palette.common.white}
      >
        <Box alignItems="center" paddingVertical="16px" paddingHorizontal="5%">
          <Typography
            fontFamily={theme.fonts.poppings.Poppins_700Bold}
            fontSize="21px"
            textAlign="center"
          >
            Histórico de estacionamentos
          </Typography>
        </Box>

        <Box paddingHorizontal="5%" marginTop="8px">
          <Box
            flexDirection="row"
            alignItems="center"
            paddingRight="16px"
            borderRadius="8px"
            border={`1px solid ${theme.palette.border.lightGray}`}
          >
            <Box flex={1}>
              <TextInput
                autoComplete="off"
                autoCorrect={false}
                placeholder="Pesquise pela matrícula do carro"
                noBorder
                onChangeText={(value) => {
                  setLicensePalte(value);
                }}
              />
            </Box>
            <SearchSvgComponent />
          </Box>

          <Box
            paddingHorizontal="3%"
            paddingVertical="16px"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {MOBILE_TYPES.map((mobileType) => (
              <TouchableOpacity
                key={mobileType.value}
                onPress={() => setSelectedType(mobileType)}
              >
                <Box
                  paddingVertical="10px"
                  paddingHorizontal="30px"
                  borderRadius="100px"
                  background={
                    selectedType.value === mobileType.value
                      ? theme.palette.primary
                      : theme.palette.common.gray3
                  }
                >
                  <Typography>{mobileType.label}</Typography>
                </Box>
              </TouchableOpacity>
            ))}
          </Box>

          <Box
            marginVertical="16px"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <InfoSvgComponent />
            <Box width="6px" />
            <Typography textAlign="center">
              Só pode visualizar o Histórico de{' '}
              {moment(new Date()).locale('pt-br').format('MMMM')}
            </Typography>
          </Box>

          <Box paddingHorizontal="5%">
            {filteredHistory.map((record) => (
              <Box key={record.id} marginBottom="16px">
                <Shadow
                  style={{ width: '100%' }}
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
                      borderRadius: 16,
                      backgroundColor: theme.palette.common.white,
                      paddingHorizontal: 12,
                      paddingVertical: 12,
                    }}
                  >
                    <HistoryItem data={record} />
                  </View>
                </Shadow>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default withAppTheme(HistoryScreen);
