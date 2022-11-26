import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { useLoadFonts } from './src/hooks';
import { GetStarted } from './src/screens/onboarding';
import { defaulTheme } from './src/theme';

export default function App() {
  const { isFontLoaded } = useLoadFonts();

  if (!isFontLoaded) return null;

  return (
    <ThemeProvider theme={defaulTheme}>
      <StatusBar style="auto" />
      <GetStarted />
    </ThemeProvider>
  );
}
