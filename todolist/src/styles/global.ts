import { StyleSheet } from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 16,
  },
  header: {
    fontFamily: 'sarabun-bold',
    fontSize: 20,
    marginVertical: 4,
    lineHeight: 40,
    alignSelf: 'center',
  },
  body: {
    fontFamily: 'sarabun-regular',
    fontSize: 16,
  },
  primary: {
    color: colors.darkPurple,
  },
  secondary: {
    color: colors.lightPurple,
  },
  lightGrey: {
    color: colors.lightGrey,
  },
  darkGrey: {
    color: colors.darkGrey,
  },
  white: {
    color: colors.white,
  },
  black: {
    color: colors.black,
  },
  error: {
    color: colors.default.error,
  },
  success: {
    color: colors.default.success,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 16,
    zIndex: 10,
  },
  inputField: {
    height: 50,
    fontFamily: 'sarabun-regular',
    paddingHorizontal: 12,
    fontSize: 16,
    borderColor: colors.darkPurple,
    borderWidth: 2,
    borderRadius: 4,
    width: '100%',
    marginBottom: 10,
  },
  submitButton: {
    alignSelf: 'center',
    height: 40,
    fontSize: 12,
    width: 100,
    marginTop: 26,
    backgroundColor: colors.darkPurple,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 16,
  },
  errorText: {
    color: colors.default.error,
    fontSize: 16,
  },
});

export default globalStyles;
