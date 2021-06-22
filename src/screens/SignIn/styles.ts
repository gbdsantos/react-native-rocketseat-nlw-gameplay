import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    justifyContent: 'center' 
  },

  image: {
    height: 360,
    width: '100%',
  },

  content: {
    paddingHorizontal: 50,
    marginTop: -40
  },

  title: {
    color: theme.colors.heading,
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center',
  },

  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    marginBottom: 64,
    textAlign: 'center'
  }
})