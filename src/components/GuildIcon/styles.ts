import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.colors.discord,
    borderRadius: 8,
    overflow: 'hidden',
    height: 66,
    width: 62,
  },
  
  image: {
    height: 66,
    width: 62,
  },

})