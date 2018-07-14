import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri:
              "https://a11c5e8fa73ef6a3e4e9-166542a27aba2e1443048496dd1ca989.ssl.cf1.rackcdn.com/properties/photos/2766704_1_1495599080.jpg"
          }
        })
      };
    });
  };

  placeSelectedHandler = key => {
    return this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modelClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    return (
      <View style={style.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modelClosedHandler} />
        <PlaceInput onPlacedAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler} />
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
  }
});
