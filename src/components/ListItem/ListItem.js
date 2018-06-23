import React from "react";
import { View, Text, StyleSheet } from "react-native";

const listItem = props => (
  <View style={style.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const style = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee"
  }
});

export default listItem;
