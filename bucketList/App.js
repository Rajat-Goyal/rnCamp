/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
var list=[]
export default class App extends Component<Props> {
  
  state={
    placeName:'',
    placeList:[]
  }
  onChangeInput=(val)=>{
    // if(this.state.placeName.trim() ==='')
    // return;
    this.setState(prevState=>{
    return({
      placeName:val})
  })}
  onButtonPress=()=>{
    if(this.state.placeName !== '')
    {
      list.push(this.state.placeName)
      this.setState({
        placeList:list
      })
      this.state.placeName=""
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
      <View style={styles.container}>
      <TextInput value={this.state.placeName} placeholder="Write whatever you want to write here" onChangeText={(val)=>this.onChangeInput(val)} style={styles.placeInput}/>
      <Button title={"Add"} onPress={this.onButtonPress}/>
      </View>
      <View style={{flex:7, alignItems:'baseline', padding:10}}>
        {this.state.placeList.map((element,index)=>
          (<Text key={index}>{element}</Text>))}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'yellow',
    flexDirection:'row',
    // alignItems: 'flex-start',

    alignItems: 'baseline',
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
  placeInput:{
    borderBottomColor:'blue',
    borderBottomWidth: 1,
    width:'80%'
  }
});
