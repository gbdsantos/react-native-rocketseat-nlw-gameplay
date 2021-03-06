import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },

  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },

  bar: {
    alignSelf: 'center',
    backgroundColor: theme.colors.secondary30,
    borderRadius: 2,
    marginTop: 13,
    height: 2,
    width: 39,
  }
});