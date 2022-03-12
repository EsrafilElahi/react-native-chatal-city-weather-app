import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch",
    // marginVertical: 10,
  },
  layer: {
    // flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 10,
    alignContent: "stretch",
  },
  divider: {
    borderBottomColor: "#757876",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  weatherInfo: {
    // flex: .85
  },
  cityView: {
    display: "flex",
    alignItems: "center",
    alignContent: "stretch",
    marginVertical: 10,
  },
  city: {
    fontFamily: "oswald_regular",
    fontSize: 38,
  },
  dateTimeView: {
    display: "flex",
    alignItems: "center",
    alignContent: "stretch",
    marginVertical: 5,
  },
  dateTime: {
    fontSize: 22,
  },
  tempContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "stretch",
    alignItems: "center",
    // marginVertical: 0,
  },
  tempNameView: {},
  tempName: {
    fontSize: 25,
    marginTop: 5,
  },
  tempDegree: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "stretch",
    alignItems: "center",
  },
  tempDayName: {
    fontSize: 20,
  },
  tempNightName: {
    fontSize: 20,
  },
  tempDay: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 4,
  },
  tempNight: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 4,
  },
  tempDayContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    alignContent: "stretch",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 5,
    textAlignVertical: "center",
  },
  tempNightContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "stretch",
    marginTop: 5,
  },
  description: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignContent: "stretch",
    // marginVertical: 20,
  },
  weatherIcon: {
    fontSize: 17,
  },
  weatherDesc: {
    fontSize: 17,
  },
  rainPercentView: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignContent: "stretch",
  },
  rain: {
    fontSize: 17,
  },
  rainPercent: {
    fontSize: 17,
  },
  sunInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "stretch",
    alignItems: "stretch",
  },
  sunRiseView: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignContent: "stretch",
    alignItems: "center",
    marginTop: 20,
  },
  sunRiseName: {},
  sunRiseTime: {},
  sunSetView: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignContent: "stretch",
    alignItems: "center",
    marginTop: 20,
  },
  sunSetName: {},
  sunSetTime: {},
});
