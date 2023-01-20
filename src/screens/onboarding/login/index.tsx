import { FC, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import { Box, Image, ScreenContainer, Spacer, Text } from '../../../components';
import { AssetsEnum } from '../../../constants';
import { makeFirebaseAuthService } from '../../../factories';
import { useNotification } from '../../../hooks';
import { AnyObject } from '../../../types';
import LoginForm from './login-form';

const LoginScreen: FC = () => {
  const { notificationCenter } = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = (values: AnyObject) => {
    const authService = makeFirebaseAuthService();
    (async () => {
      setIsLoading(true);
      try {
        await authService.authenticate({
          username: values.username,
          password: values.password,
        });
      } catch (error) {
        notificationCenter.showNotification({
          message: 'Erro ao iniciar sessão!',
          description: 'Verifique as suas credenciais por favor.',
          variant: 'danger',
          closeAfter: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScreenContainer withSafeArea>
          <Box
            paddingHorizontal="5%"
            marginBottom="100px"
            flex={1}
            flexDirection="column"
            center
          >
            <Spacer />

            <Image height={120} asset={AssetsEnum.images.logo} />
            <Box flex={1} marginTop="32px">
              <Text variant="heading" align="center">
                Login
              </Text>
              <Box marginVertical="20px">
                <Text align="center">
                  Insira as suas credenciais para começar
                </Text>
              </Box>

              <LoginForm isLoading={isLoading} onSubmit={onFormSubmit} />
            </Box>

            <Spacer />
            <Spacer />
          </Box>
        </ScreenContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
