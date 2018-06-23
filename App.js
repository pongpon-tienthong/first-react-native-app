import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default class App extends Component {
  state = { placeName: "" };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.inputContainer}>
          <TextInput
            value={this.state.placeName}
            placeholder="An Awesome Place"
            onChangeText={this.placeNameChangedHandler}
            style={style.placeInput}
          />
          <Button title="Add" style={style.placeButton} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
