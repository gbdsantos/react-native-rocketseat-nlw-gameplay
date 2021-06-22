import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    height: 56,
    width: '100%',
  },

  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center'
  },

  iconWrapper: {
    alignItems: 'center',
    borderColor: theme.colors.line,
    borderRightWidth: 1,
    justifyContent: 'center',
    height: 56,
    width: 56
  },

  icon: {
    height: 18,
    width: 24,
  }
});