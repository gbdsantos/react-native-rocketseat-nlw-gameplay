import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  label: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,

  },

  form: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  select: {
    flexDirection: 'row',
    alignItems: 'center',

    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    paddingRight: 25,
    height: 68,
    width: '100%',
  },

  image: {
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1,
    height: 68,
    width: 64,
  },

  selectBody: {
    flex: 1,
    alignItems: 'center',
  },

  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },

  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  divider: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize:15,
    marginRight: 4
  },

  caractersLimit: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13
  },

  footer: {
    marginBottom: 56,
    marginVertical: 20,
  }
});