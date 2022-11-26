import 'styled-components/native';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        red: string;
        fadedRed: string;
        gray2: string;
      };
      primary: string;
      secondary: string;
    };
  }
}
