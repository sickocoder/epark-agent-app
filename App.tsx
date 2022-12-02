import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { LogBox } from 'react-native';
import { useLoadFonts } from './src/hooks';
import AppRouting from './src/screens';
import { defaulTheme } from './src/theme';

LogBox.ignoreLogs(['AsyncStorage has been extracted from']); // Ignore log notification by message

export default function App() {
  const { isFontLoaded } = useLoadFonts();

  if (!isFontLoaded) return null;

  return (
    <ThemeProvider theme={defaulTheme}>
      <StatusBar style="auto" />
      <AppRouting />
    </ThemeProvider>
  );
}
