import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  txtInput: {
    marginHorizontal: 10,
    height: 50,
    width: 220,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.borderColor,
    fontFamily: "oswald_regular",
    fontSize: 16,
  },
  Icon: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    padding: 10,
    borderRadius: 5,
  },
});
