import 'styled-components/native';

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
        lightGray: string;
      };
      primary: string;
      secondary: string;
    };
  }
}
