import 'styled-components/native';
import { FontsEnum } from './src/constants';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      border: {
        lightGray: 'rgba(215, 219, 217, 0.3)';
      };
      common: {
        black: string;
        white: string;
        red: string;
        fadedRed: string;
        gray2: string;
        gray3: string;
        lightGray: string;
        yellowLight: string;
      };
      primary: string;
      secondary: string;
    };
    fonts: typeof FontsEnum;
  }
}
