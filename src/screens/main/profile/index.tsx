import { useNavigation } from '@react-navigation/native';
import CachedImage from 'expo-cached-image';
import ExpoConstants from 'expo-constants';
import { useContext } from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';

import { Box, ShadowView, Typography } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import {
  LocationYellowSvgComponent,
  NavigateBackSvgComponent,
  PersonYellowSvgComponent,
  PhoneYellowSvgComponent,
  UserSettingsYellowSvgComponent,
} from '../../../components/SVG';
import { UserContext } from '../../../context';
import { ThemedComponent } from '../../../types';
import SlotYellowInfo from '../park/shared/slot-yellow-info';

const ProfilePage: ThemedComponent = ({ theme: { palette, fonts } }) => {
  const navigation = useNavigation();
  const { user, userInfo } = useContext(UserContext);

  if (!userInfo) return null;

  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={{
        paddingBottom: 120, // to avoid bottomBar cut out
      }}
    >
      <Box
        flex={1}
        marginTop={`${ExpoConstants.statusBarHeight + 10}px`}
        paddingHorizontal="5%"
      >
        <Box flexDirection="row" justifyContent="flex-start">
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
                Sair do perfil
              </Typography>
            </Box>
          </TouchableOpacity>
        </Box>
        <Box
          paddingVertical="24px"
          marginBottom="10px"
          flexDirection="row"
          alignItems="center"
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderColor: palette.primary,
              borderWidth: 3,
            }}
            source={{ uri: user.photoURL }}
          />

          <Box marginLeft="12px">
            <Typography
              fontFamily={fonts.poppings.Poppins_700Bold}
              fontSize="16px"
              lineHeight="24px"
            >
              {userInfo.displayName}
            </Typography>
            <Typography
              fontSize="12px"
              color={palette.common.gray2}
              fontFamily={fonts.poppings.Poppins_400Regular}
            >
              Tecnico operador
            </Typography>
          </Box>
        </Box>

        <ShadowView>
          <SlotYellowInfo
            background={palette.common.gray3}
            label="Nome completo"
            value={user.displayName}
            iconComponent={PersonYellowSvgComponent as any}
          />
          <Box height="12px" />
          <SlotYellowInfo
            background={palette.common.gray3}
            label="Nome de usuário"
            value={user.email}
            iconComponent={UserSettingsYellowSvgComponent as any}
          />
          <Box height="12px" />
          <SlotYellowInfo
            background={palette.common.gray3}
            label="Telefone"
            value={userInfo.phone || '912345678'}
            iconComponent={PhoneYellowSvgComponent as any}
          />
          <Box height="12px" />
          <SlotYellowInfo
            background={palette.common.gray3}
            label="Local designado"
            value={userInfo.locationName}
            iconComponent={LocationYellowSvgComponent as any}
          />
        </ShadowView>
      </Box>
    </ScrollView>
  );
};

export default withAppTheme(ProfilePage);
