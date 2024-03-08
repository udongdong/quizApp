import {Appearance} from 'react-native';

const lightPallete: Color = {
  primary: '#5F37FF',
  secondary: '#D7FF37',
  background: '#FFFFFF',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#ddd',
  error: 'red',
  easy: '#54AF45',
  medium: '#F58F16',
  hard: '#DD333B',
};

const darkPallete: Color = {
  ...lightPallete,
};

const pallete: {light: Color; dark: Color} = {
  light: lightPallete,
  dark: darkPallete,
};

const colorScheme = Appearance.getColorScheme() || 'light';
export const color: Color = pallete[colorScheme];

type Color = {
  primary: string;
  secondary: string;
  background: string;
  black: string;
  white: string;
  gray: string;
  error: string;
  easy: string;
  medium: string;
  hard: string;
};
