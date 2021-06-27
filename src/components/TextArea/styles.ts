import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50, 
    borderRadius: 8,
    borderWidth: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    paddingLeft: 16,
    paddingTop: 16,
    textAlignVertical: 'top',
    height: 95,
    width: '100%',
  }
})