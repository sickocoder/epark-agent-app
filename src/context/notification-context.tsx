import { createContext, ReactNode, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';

import { Box, Typography } from '../components';
import { withAppTheme } from '../components/HOC';
import { ThemedComponent } from '../types';

interface NotificationProviderProps {
  children: ReactNode;
}

interface ShowNotificationParams {
  message: string;
  description?: string;
  closeAfter?: number;
  variant?: 'danger' | 'success';
}

export const NotificationContext = createContext<{
  showNotification: (params: ShowNotificationParams) => void;
}>(null);

const NotificationProviderWithTheme: ThemedComponent<
  NotificationProviderProps
> = ({ children, theme: { palette, fonts } }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [variant, setVariant] = useState('success');

  const cleanUp = useCallback(() => {
    setIsModalVisible(false);
    setMessage('');
  }, []);

  const showNotification = useCallback(
    ({
      message: messageText,
      description: descriptionText,
      closeAfter,
      variant: modalVariant,
    }: ShowNotificationParams) => {
      setMessage(messageText);
      setIsModalVisible(true);

      if (modalVariant) {
        setVariant(modalVariant);
      }

      if (descriptionText) {
        setDescription(descriptionText);
      }

      if (closeAfter) {
        setTimeout(() => {
          cleanUp();
        }, 3000);
      }
    },
    [cleanUp]
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <NotificationContext.Provider value={{ showNotification }}>
      <Modal
        animationIn="slideInDown"
        animationOut="fadeOut"
        animationInTiming={600}
        isVisible={isModalVisible}
        backdropColor="transparent"
        useNativeDriver
      >
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <Box
            marginTop="16px"
            background={variant === 'danger' ? palette.common.red : '#00a86b'}
            paddingVertical="16px"
            paddingHorizontal="32px"
            // borderRadius={description ? '16px' : '50%'}
          >
            <Box center={!!description}>
              <Typography
                color={palette.common.white}
                fontFamily={
                  description
                    ? fonts.inter.Inter_700Bold
                    : fonts.inter.Inter_500Medium
                }
                fontSize="15px"
              >
                {message}
              </Typography>
            </Box>
            {description && (
              <Box marginTop="8px" opacity={0.9}>
                <Typography color={palette.common.white}>
                  {description}
                </Typography>
              </Box>
            )}
          </Box>
        </SafeAreaView>
      </Modal>
      {children}
    </NotificationContext.Provider>
  );
};

export const NotificationProvider = withAppTheme(NotificationProviderWithTheme);
