import 'expo-dev-client';

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Box } from './src/components';
import { useLoadFonts } from './src/hooks';
import AppRouting from './src/screens';
import SVGatorComponent from './src/screens/splash/logo';
import { defaulTheme } from './src/theme';

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from',
  'Non-serializable values were found in the navigation state',
  'Require cycle:',
]); // Ignore log notification by message

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { isFontLoaded } = useLoadFonts();

  useEffect(() => {
    if (isFontLoaded) {
      setTimeout(() => {
        setAppIsReady(true);
      }, 1600);
    }
  }, [isFontLoaded]);

  if (!appIsReady) {
    return (
      <Box flex={1} center paddingHorizontal="48px">
        <SVGatorComponent />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={defaulTheme}>
      <StatusBar style="auto" />
      <AppRouting />
    </ThemeProvider>
  );
}
