import CachedImage from 'expo-cached-image';
import { useContext } from 'react';

import { Box, Image, Typography } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import { AssetsEnum } from '../../../constants';
import { UserContext } from '../../../context';
import { ThemedComponent } from '../../../types';

const HomeHeader: ThemedComponent = ({ theme }) => {
  const { user } = useContext(UserContext);
  const { palette, fonts } = theme;

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

        <CachedImage
          source={{
            uri: user.photoURL,
          }}
          cacheKey={`${user.photoURL}-thumb`}
          placeholderContent={
            <Box
              width="40px"
              height="40px"
              borderRadius="24px"
              background={palette.common.gray3}
              border={`3px solid ${palette.common.gray2}`}
            />
          }
          resizeMode="contain"
          style={{
            with: 40,
            height: 40,
            borderRadius: 24,
            border: `3px solid ${palette.primary}`,
          }}
        />
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
        <Box marginLeft="14px" flex={1} flexDirection="column">
          <Typography
            fontFamily={fonts.poppings.Poppins_500Medium}
            fontSize="18px"
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
            <Box width="8px" />
            <Typography
              fontSize="13px"
              fontFamily={fonts.inter.Inter_400Regular}
              color={palette.common.lightGray}
            >
              03 em parque
            </Typography>
            <Box paddingHorizontal="6px">
              <Typography fontSize="30px" color={palette.common.white}>
                •
              </Typography>
            </Box>
            <Image
              width={16}
              height={16}
              asset={AssetsEnum.icons.littleCarGreen}
            />
            <Box width="8px" />
            <Typography
              fontSize="13px"
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
