import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 16,
    textAlign: 'center',
  },

  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 64,
    textAlign: 'center'
  }
})