import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 20,
  },
  side: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
  },
  textBlue: {
    color: "#4EA8DE",
  },
  textPurple: {
    color: "#8284FA",
  },
  badge: {
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    marginLeft: 8,
  },
  badgeText: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: "#D9D9D9",
  },
});
