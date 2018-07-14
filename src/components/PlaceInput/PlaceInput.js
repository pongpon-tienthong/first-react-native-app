import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default class PlaceInput extends Component {
  state = { placeName: "" };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlacedAdded(this.state.placeName);
  };
  
  render() {
    return (
      <View style={style.inputContainer}>
        <TextInput
          value={this.state.placeName}
          placeholder="An Awesome Place"
          onChangeText={this.placeNameChangedHandler}
          style={style.placeInput}
        />
        <Button
          title="Add"
          style={style.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
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
