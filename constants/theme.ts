import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#5ccc15',
  lightPrimary: '#93ff53',
  secondary: '#EE246D',
  dark: '#3C3C3C',

  lightGray: '#F6F6F6',
  lightGray2: '#ebebeb',
  veryLightGray: '#f7f7f7',
  gray: '#C1C3C5',
  grayText: '#6C6C6C',
  darkgray: '#5F6368',

  black: '#1E1F20',
  white: '#FFFFFF',
  red: '#F24924',
  green: '#4AEE5B',

  transparent: 'transparent',
  transparentBlack: '#00000090',
  transparentBlackFont: '#00000099',
  transparentBlack30: '#00000030'
};

export const SIZES = {
  normalFontSize: 16,
  titleFontSize: 18,
  padding: 5,
  screenPadding: 20,
  buttonImage: 20,
  ///////////////////////////////////
  // global sizes
  base: 8,
  font: 14,
  radius: 15, // 30 for more rounded corners
  // padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // for animated loading screen
  INPUT_RANGE_START: 0,
  INPUT_RANGE_END: 1,
  OUTPUT_RANGE_START: -281,
  OUTPUT_RANGE_END: 0,
  ANIMATION_TO_VALUE: 1,
  ANIMATION_DURATION: 25000,

  // app dimensions
  width,
  height
};

export const FONTS = {
  //export your fonts here
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
