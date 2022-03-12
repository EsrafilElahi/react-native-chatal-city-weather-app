import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  txtInput: {
    marginHorizontal: 10,
    height: 55,
    width: "68%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.borderColor,
    fontFamily: "oswald_regular",
    fontSize: 16,
    color: "#FFF",
  },
  Icon: {
    height: 55,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    padding: 10,
    borderRadius: 5,
  },
});
