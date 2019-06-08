/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text
} from "react-native";
import ListItem from "./components/ListItem";
import ListContainer from "./components/ListContainer"
import InputContainer from "./components/InputContainer";

export default class App extends Component {
  state = {
    placeList: []
  };

  placeAddHandler = ( x ) => {
    this.setState(prevState => {
      return {
        placeList: prevState.placeList.concat({
          placeName: x,
          placeImage: null
        })
      };
    }, () => {x="RAJAT"});
    
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
  }
});
