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
    borderRadius: 8,
    justifyContent: 'space-between',
    height: 100,
    paddingVertical: 20,
    width: 100,
  },

  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
  },

  check: {
    position: 'absolute',
    top: 7,
    right: 7,

    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
    borderWidth: 2,
    height: 12,
    width: 12
  },

  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    height: 10,
    width: 10
  },

});