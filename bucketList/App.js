/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    placeName: "",
    list: []
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

  submit = () =>{
      //alert(this.state.placeName)
      //array = [...this.state.list,this.state.placeName]
      this.setState({
        return(
        list: [...this.state.list,this.state.placeName],
        placeName: ""
        );
      })
  }
  render() {
    return (
      <View style={styles.containerText}>
        <View style={styles.container}>
          <TextInput
            value={this.state.placeName}
            onChangeText={val => this.onChangInput(val)}
            placeholder={"I want to go to .."}
            autoFocus={true}
            style={styles.placeInput}
          />
          <Button onPress={this.submit} title={"Add"} />
        </View>
        <View style={styles.containerText}>
          {
            this.state.list.map((value,index)=>{
              return(
              <Text>{value}</Text>
              )
            })
          }
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row' 
  },
  containerText: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column' 
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
    borderBottomWidth: 2
  }
});
