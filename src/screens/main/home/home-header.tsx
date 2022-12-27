import { useNavigation } from '@react-navigation/native';
import CachedImage from 'expo-cached-image';
import { useCallback, useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Box, Typography } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import { AssetsEnum, ScreensEnum } from '../../../constants';
import { UserContext } from '../../../context';
import { ThemedComponent } from '../../../types';

const HomeHeader: ThemedComponent = ({ theme }) => {
  const navigation = useNavigation();

  const { user } = useContext(UserContext);
  const { palette, fonts } = theme;

  const goToProfile = useCallback(() => {
    navigation.navigate(ScreensEnum.main.profile as unknown as never);
  }, [navigation]);

  return (
    <Box width="100%" flexDirection="column">
      <Box
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginVertical="16px"
      >
        <Typography fontSize="20px" fontFamily={fonts.inter.Inter_400Regular}>
          Bem vindo
          <Typography
            fontSize="20px"
            fontFamily={fonts.poppings.Poppins_800ExtraBold}
          >
            , {user.displayName.split(' ')[0]}
          </Typography>
        </Typography>

        <TouchableOpacity onPress={goToProfile}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              borderColor: palette.primary,
              borderWidth: 3,
            }}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
      </Box>

      <Box
        width="100%"
        background={palette.common.black}
        borderRadius="12px"
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="20px"
        paddingVertical="20px"
      >
        <Box
          width="54px"
          height="54px"
          borderRadius="27px"
          paddingHorizontal="3px"
          paddingVertical="3px"
          background={palette.common.white}
        >
          <Box
            flex={1}
            center
            borderRadius="27px"
            background={palette.primary}
            border={`4px solid ${palette.common.black}`}
          >
            <Typography
              fontSize="24px"
              fontFamily={fonts.poppings.Poppins_800ExtraBold}
            >
              P
            </Typography>
          </Box>
        </Box>
        <Box marginLeft="10px" flex={1} flexDirection="column">
          <Typography
            fontFamily={fonts.poppings.Poppins_500Medium}
            fontSize="16px"
            color={palette.common.white}
          >
            Estacionamentos no dia
          </Typography>
          <Box flexDirection="row" alignItems="center">
            <Image
              width={16}
              height={16}
              asset={AssetsEnum.icons.littleCarOrange}
            />
            <Box width="4px" />
            <Typography
              fontSize="11px"
              fontFamily={fonts.inter.Inter_400Regular}
              color={palette.common.lightGray}
            >
              03 em parque
            </Typography>
            <Box paddingHorizontal="4px">
              <Typography fontSize="30px" color={palette.common.white}>
                •
              </Typography>
            </Box>
            <Image
              width={16}
              height={16}
              asset={AssetsEnum.icons.littleCarGreen}
            />
            <Box width="4px" />
            <Typography
              fontSize="11px"
              fontFamily={fonts.inter.Inter_400Regular}
              color={palette.common.lightGray}
            >
              03 em parque
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withAppTheme(HomeHeader);
