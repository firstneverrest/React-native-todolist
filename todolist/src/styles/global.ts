import { StyleSheet } from 'react-native';
import color from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    color: color.darkPurple,
  },
  secondary: {
    color: color.lightPurple,
  },
  lightGrey: {
    color: color.lightGrey,
  },
  darkGrey: {
    color: color.darkGrey,
  },
  white: {
    color: color.white,
  },
  black: {
    color: color.black,
  },
  error: {
    color: color.default.error,
  },
  success: {
    color: color.default.success,
  },
});

export default globalStyles;
