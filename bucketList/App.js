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
import Reset from './components/ResetButton/ResetButton';

export default class App extends Component {
  state = {
    placeList: []
  };

  placeAddHandler = (x) => {
    this.setState(prevState => {
      return {
        placeList: prevState.placeList.concat({
          placeName: x,
          placeImage: null
        })
      };
    }, () => { x = "RAJAT" });

  };
  resetHandler = () =>{
    this.refs.child.resetText();
  }


  render() {
    return (
      <View style={styles.container}>
        <InputContainer ref="child" onAdd={this.placeAddHandler} />
        <ListContainer placeList={this.state.placeList} />
        <Reset resetHandler={this.resetHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
