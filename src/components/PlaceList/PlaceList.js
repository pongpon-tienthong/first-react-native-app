import React from "react";
import { View, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem key={i} placeName={place} />
  ));

  return <View style={style.listContainer}>{placesOutput}</View>;
};

const style = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;