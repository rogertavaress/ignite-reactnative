import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingLeft: 8,
    paddingRight: 12,
    flexDirection: "row",
    background: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    marginBottom: 8,
  },
  checkButton: {
    width: 18,
    height: 18,
    borderColor: "#4EA8DE",
    borderWidth: 2,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedButton: {
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
  },
  checkText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#F2F2F2",
    flex: 1,
    paddingHorizontal: 8,
  },
  checkedText: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
