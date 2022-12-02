import { FC } from 'react';

import {
  Box,
  Button,
  Image,
  ScreenContainer,
  Spacer,
  Text,
} from '../../../components';
import { AssetsEnum } from '../../../constants';

const GetStarted: FC = () => (
  <ScreenContainer withSafeArea>
    <Box
      paddingVertical="16px"
      marginTop="32px"
      paddingHorizontal="32px"
      flex={1}
      center
    >
      <Spacer />

      <Image asset={AssetsEnum.images.getStarted.mainIllustration} />

      <Box marginTop="24px">
        <Text variant="heading" align="center">
          O estacionamento na palma da sua mão
        </Text>
      </Box>

      <Box marginTop="24px">
        <Text align="center">
          A Cas-park é um aplicativo de gestão para estacionamento simples e
          intuitivo
        </Text>
      </Box>

      <Spacer />
      <Spacer />

      <Box width="100%">
        <Button variant="primary">
          <Box flexDirection="row" center>
            <Box marginRight="6px">
              <Text color="#fff">Começar agora</Text>
            </Box>
            <Image
              width={24}
              height={24}
              asset={AssetsEnum.icons.circleChevronRight}
            />
          </Box>
        </Button>
      </Box>

      <Spacer />
    </Box>
  </ScreenContainer>
);

export default GetStarted;
