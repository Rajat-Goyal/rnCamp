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
    list:[]
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

  add = () =>{
    if(this.state.placeName.trim()=="") return;

    this.setState(prevState=>{
      return{
        list : [...prevState.list,this.state.placeName],
        placeName: ""
      };
     
    
    })
  }

  render() {
    return (
      <View style={styles.container}>
            <View style={styles.container1}>
          <TextInput
            value={this.state.placeName}
            onChangeText={val => this.onChangInput(val)}
            placeholder={"I want to go to .."}
            autoFocus={true}
            style={styles.placeInput}
          />
          <Button title={"Add"} onPress={this.add} />
    </View>
    <View style={styles.container2}>
        {
          this.state.list.map((value,index)=>{
            return  <Text> {value} </Text>
             
            
            
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
    flexDirection: 'column' 
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
    borderBottomWidth: 2
  }
});
