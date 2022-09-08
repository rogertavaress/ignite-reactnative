import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(-30),
    marginHorizontal: RFValue(24),
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#262626",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0D0D0D",
    borderRadius: 6,
    flex: 1,
    marginRight: 4,
    paddingHorizontal: 16,
    color: "#F2F2F2",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  inputFocussed: {
    borderColor: "#5E60CE",
  },
  button: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    width: RFValue(52),
    height: RFValue(52),
    justifyContent: "center",
    alignItems: "center",
  },
});
