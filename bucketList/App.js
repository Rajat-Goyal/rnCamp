/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, Button, Text } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    placeName: "",
    placeList: []
  };
  onChangInput = val => {
    // if(this.state.placeName.trim() === '')
    //   return;
    this.setState(prevState => {
      return {
        placeName: val.toLowerCase()
      };
    });
  };

  placeAddHandler = () => {
    //if (this.state.placeName.trim() === "" ) return;

    this.setState(prevState => {
      return {
        placeList: prevState.placeList.concat(this.state.placeName)
      };
    });

    
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.placeName}
            onChangeText={val => this.onChangInput(val)}
            placeholder={"I want to go to .."}
            autoFocus={true}
            style={styles.placeInput}
          />
          <Button title={"Add"} onPress={this.placeAddHandler} />
        </View>
        <View style={styles.placeListContainer} >
          {this.state.placeList.map(place => {
            return <Text>{place}</Text>
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "baseline",
    flexDirection: "row",
    width: "100%",
    padding: 40
  },
  placeListContainer: {
    flex: 4,
    backgroundColor: "grey"
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  placeInput: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    width: "70%"
  }
});
