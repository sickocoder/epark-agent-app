import { Box, Image, Typography } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import { AssetsEnum } from '../../../constants';
import { ThemedComponent } from '../../../types';

const HomeWarningAlert: ThemedComponent = ({ theme }) => {
  const { palette, fonts } = theme;

  return (
    <Box
      paddingVertical="8px"
      paddingHorizontal="8px"
      background={palette.common.yellowLight}
      borderRadius="8px"
      flexDirection="row"
      alignItems="center"
    >
      <Image width={24} height={24} asset={AssetsEnum.icons.userLocation} />
      <Typography fontSize="14px" fontFamily={fonts.inter.Inter_500Medium}>
        {' '}
        Rua B13, avenida vicente, 1º de Maio{' '}
      </Typography>
    </Box>
  );
};

export default withAppTheme(HomeWarningAlert);
