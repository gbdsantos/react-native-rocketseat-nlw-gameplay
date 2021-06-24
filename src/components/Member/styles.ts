import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
  },

  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bulletStatus: {
    borderRadius: 4,
    marginRight: 9,

    height: 8,
    width: 8,
  },

  nameStatus: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  }
});