import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useLoadFonts } from './src/hooks';
import AppRouting from './src/screens';
import { defaulTheme } from './src/theme';

import { Box } from './src/components';
import SVGatorComponent from './src/screens/splash/logo';

SplashScreen.hideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { isFontLoaded } = useLoadFonts();

  useEffect(() => {
    async function prepare() {
      if (isFontLoaded) {
        try {
          setTimeout(async () => {
            setAppIsReady(true);
          }, 1600);
        } catch (e) {
          console.warn(e);
        }
      }
    }

    prepare();
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
