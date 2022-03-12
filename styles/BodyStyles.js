import { StyleSheet } from "react-native";

export default StyleSheet.create({
  layer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  divider: {
    borderBottomColor: "#757876",
    borderBottomWidth: 1,
    // marginVertical: 20,
  },
  weatherInfo: {
    flexGrow: 1,
  },
  cityView: {
    display: "flex",
    flexGrow: 1,
    marginTop: 20,
    alignItems: "center",
    alignContent: "stretch",
  },
  city: {
    fontFamily: "oswald_regular",
    fontSize: 30,
    color: "#FFF",
  },
  dateTimeView: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    alignContent: "stretch",
  },
  dateTime: {
    fontSize: 22,
    color: "#FFF",
  },
  tempContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "stretch",
  },
  tempNameView: {},
  tempName: {
    fontSize: 22,
    color: "#FFF",
  },
  tempDegree: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tempDayName: {
    fontSize: 22,
    color: "#FFF",
  },
  tempNightName: {
    fontSize: 22,
    color: "#FFF",
  },
  tempDay: {
    fontSize: 17,
    color: "#FFF",
    textAlign: "center",
    marginTop: 4,
  },
  tempNight: {
    fontSize: 17,
    color: "#FFF",
    textAlign: "center",
    marginTop: 4,
  },
  tempDayContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 5,
    textAlignVertical: "center",
  },
  tempNightContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  description: {
    display: "flex",
    // flexGrow: 1,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherIcon: {
    fontSize: 17,
    color: "#FFF",
  },
  weatherDesc: {
    fontSize: 20,
    color: "#FFF",
  },
  rainPercentView: {
    display: "flex",
    // flexGrow: 1,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rain: {
    fontSize: 20,
    color: "#FFF",
  },
  rainPercent: {
    fontSize: 17,
    color: "#FFF",
  },
  sunInfo: {
    display: "flex",
    flexGrow: 1,
    marginVertical: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  sunRiseView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sunRiseName: {
    fontSize: 20,
    color: "#FFF",
  },
  sunRiseTime: {
    fontSize: 17,
    color: "#FFF",
  },
  sunSetView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sunSetName: {
    fontSize: 20,
    color: "#FFF",
  },
  sunSetTime: {
    fontSize: 17,
    color: "#FFF",
  },
});
