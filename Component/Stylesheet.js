import React from "react";
import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculation: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  numbers: {
    flex: 3,
    backgroundColor: "#434343"
  },
  operations: {
    flex: 1,
    backgroundColor: "#636363",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 24
  },
  resultText: {
    fontSize: 30,
    color: "black"
  },
  calculationText: {
    fontSize: 24,
    color: "black"
  },
  btn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    fontSize: 24
  },
  btnText: {
    fontSize: 24,
    color: "white"
  },
  white: {
    color: "white"
  }
});

export default Styles;
