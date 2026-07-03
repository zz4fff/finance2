import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 12,
  },

  verticalSpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
    height: 100,
  },

  mt20: {
    marginTop: 20,
  },

  label: {
    fontSize: 16,
    color: colors.gray_900,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.gray_300,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.white,
    color: colors.gray_900,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.dark_purple,
    borderRadius: 8,
    paddingVertical: 14,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
})

export default styles;
