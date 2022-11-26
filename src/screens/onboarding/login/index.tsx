import { FC, useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';

import { makeFirebaseAuthService } from '../../../factories';

import { ScreenContainer, Box, Text, Image, Spacer } from '../../../components';
import { AssetsEnum } from '../../../constants';
import { AnyObject } from '../../../types';

import LoginForm from './login-form';

const LoginScreen: FC = () => {
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
        console.log(error);
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
            paddingHorizontal="32px"
            marginBottom="100px"
            flex={1}
            flexDirection="column"
            center
          >
            <Spacer />

            <Image width={250} height={60} asset={AssetsEnum.images.logo} />
            <Box flex={1} marginTop="48px">
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
