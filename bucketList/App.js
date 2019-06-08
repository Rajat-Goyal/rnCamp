/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, Button, Text } from "react-native";
import List from "./components/List"
import InputContainer from "./components/inputContainer";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});



export default class App extends Component {
  state = {
    placeName: "",
    placeList: [],
   url: 'https://images.all-free-download.com/images/graphicthumb/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg'
  };


  placeAddHandler = (x) => {
    //if (this.state.placeName.trim() === "" ) return;

    this.setState(prevState => {
      return {
        placeList: prevState.placeList.concat({
          placeName: x,
          placeImage: null
        }),
        placeName: ""
      };
    });

    
  };
  render() {
    return (
      <View style={styles.container}>
        <InputContainer onAdd={this.placeAddHandler} />
        <ListContainer placeList={this.state.placeList} />
       
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    //padding: 20
  },
  placeListContainer: {
    flex: 5,
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   
  },
  container2: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "grey"
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
