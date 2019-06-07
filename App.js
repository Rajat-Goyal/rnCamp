/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Button,Text, TextInput, View} from 'react-native';
import { arrayExpression } from '@babel/types';
export default class App extends Component {
 constructor() {
   super()
   this.state={
    placeName:'',
    arr:[]
  }}
  placeChange(val){
    this.setState((prevState)=>{
     return({
       placeName: val.toLowerCase()
      })
    })
  }
  addItem(){
   
  }
  render() {
    return (
      <View style={{flex:1}}>
      <View style={styles.container}>
        <TextInput 
        value={this.state.placeName} 
        autoFocus={true}
         placeholder={"I want to go to.."}
         style={styles.placeInput}
          onChangeText={(val)=>{this.placeChange(val)}}/>
          <Button
          title={"Add"}
          onPress={()=>{
            this.setState(prevState => ({
              arr: [...prevState.arr, prevState.placeName]
            }))
          }}
          />
      </View>    
      <View style={styles.listing}>
      {this.state.arr.map((item)=>{
        return <Text style={styles.listItem}>{item}</Text>;
      })}
      </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  placeInput:{
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    width:"70%"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    flexDirection: 'row'
  },
  listing:{
    flex:4,
    justifyContent: "flex-start",
    flexDirection: 'column',
  },
  listItem:{
    textAlign:"center",
    justifyContent:"center",
    padding:10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
