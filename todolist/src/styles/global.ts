import { StyleSheet } from 'react-native';
import color from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 16,
  },
  header: {
    fontFamily: 'sarabun-bold',
    fontSize: 20,
    marginVertical: 4,
    lineHeight: 40,
  },
  body: {
    fontFamily: 'sarabun-regular',
    fontSize: 16,
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
