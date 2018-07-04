import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={style.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
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
