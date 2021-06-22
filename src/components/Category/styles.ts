import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    marginRight: 8,

    height: 120,
    width: 104
  },

  content: {
    alignItems: 'center',
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent: 'space-between',
    height: 100,
    paddingVertical: 7,
    width: 100,
  },

  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: 15,
  },

  check: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
    borderWidth: 2,
    marginRight: 7,
    height: 12,
    width: 12
  },

  checked: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    marginRight: 7,
    height: 10,
    width: 10
  },

});