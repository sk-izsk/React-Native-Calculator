import React from "react";
import { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Styles from "./Component/Stylesheet.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultText: "",

      calculationText: ""
    };
    this.operations = ["DEL", "+", "-", "*", "/", "AC"];
  }
  calculateResult() {
    const text = this.state.resultText;
    this.setState({
      calculationText: eval(text)
    });
  }

  validate() {
    const text = this.state.resultText;
    switch (text.slice(-1)) {
      case "+":
      case "-":
      case "*":
      case "/":
        return false;
    }
    return true;
  }
  buttonPressed(text) {
    if (text == "=") {
      return this.validate() && this.calculateResult();
    }
    this.setState({ resultText: this.state.resultText + text });
  }

  operate(operation) {
    switch (operation) {
      case "DEL":
        let text = this.state.resultText.split("");
        text.pop();
        this.setState({
          resultText: text.join("")
        });
        break;
      case "AC":
        this.setState({
          resultText: "",
          calculationText: ""
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        const lastChar = this.state.resultText.split("").pop();
        if (this.operations.indexOf(lastChar) > 0) return;

        if (this.state.text == "") return;
        this.setState({
          resultText: this.state.resultText + operation
        });
    }
  }

  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            key={nums[i][j]}
            onPress={() => this.buttonPressed(nums[i][j])}
            style={Styles.btn}
          >
            <Text style={Styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(
        <View key={i} style={Styles.row}>
          {row}
        </View>
      );
    }

    let ops = [];
    for (let i = 0; i < 6; i++) {
      ops.push(
        <TouchableOpacity
          key={this.operations[i]}
          onPress={() => this.operate(this.operations[i])}
          style={Styles.btn}
        >
          <Text style={[Styles.btnText, Styles.white]}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={Styles.container}>
        <View style={Styles.result}>
          <Text style={Styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={Styles.calculation}>
          <Text style={Styles.calculationText}>
            {this.state.calculationText}
          </Text>
        </View>
        <View style={Styles.buttons}>
          <View style={Styles.numbers}>{rows}</View>
          <View style={Styles.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}
