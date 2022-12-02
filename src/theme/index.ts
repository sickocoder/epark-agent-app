import { DefaultTheme } from 'styled-components/native';
import { FontsEnum } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const defaulTheme: DefaultTheme = {
  borderRadius: '6px',
  palette: {
    border: {
      lightGray: 'rgba(215, 219, 217, 0.3)',
    },
    common: {
      black: '#17251D',
      white: '#fff',
      fadedRed: '#FF5860',
      red: '#FF5961',
      gray2: '#8C9096',
      gray3: '#F7F7F7',
      lightGray: '#FEFEFE',
      yellowLight: '#FFFCF1',
    },
    primary: '#F3CD3D',
    secondary: '#8C9096',
  },
  fonts: FontsEnum,
};
