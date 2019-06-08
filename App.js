/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { arrayExpression } from '@babel/types';
import Inputting from './Inputting';
import List from './List';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: []
    }
  }
  
  addItem = (placeName) => {
    if (placeName.trim() === '') {
      alert('Empty');
      return;
    }
    this.setState(prevState => ({
      arr: [...prevState.arr,placeName]
    }))
  }
  changeState=(val)=>{
    let newArr=this.state.arr;
    newArr.splice(newArr.indexOf(val),1)
    this.setState({arr:newArr})
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Inputting
          addItem={this.addItem}
        />
        <List places={this.state.arr}
        changeState={this.changeState}/>
      </View>
    );
  }
}
