import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight(),
    height: 104,
    width: '100%',
  },
  
  title: {
    flex: 1,

    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    textAlign: 'center',
  }
});