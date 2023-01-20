import {
  Box,
  Button,
  ShadowView,
  Spacer,
  TextInput,
  Typography,
} from '../../../../components';
import { withAppTheme } from '../../../../components/HOC';
import { ThemedComponent } from '../../../../types';
import { CircleAutomobile, SlotDetailHeader } from '../shared';
import { ILLUSTRATIONS } from '../shared/shared-helpers';

const AskNumberScreen: ThemedComponent = ({ theme: { palette, fonts } }) => (
  <Box flex={1} background={palette.common.white}>
    <SlotDetailHeader title="Veículo" slotId="12S01" slotName="Slot C" />
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
              Pagamento por referência
            </Typography>
            <Typography
              textAlign="center"
              fontSize="15px"
              fontFamily={fonts.inter.Inter_600SemiBold}
            >
              Insira o número de telefone do Automobilista
            </Typography>
          </Box>

          <Spacer />
          <TextInput placeholder="Telefone" keyboardType="phone-pad" />
          <Spacer />

          <Button variant="secondary">Continuar</Button>
        </Box>
      </ShadowView>
    </Box>
  </Box>
);

export default withAppTheme(AskNumberScreen);
