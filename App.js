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
const img=[
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg/1200px-City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg',
  'https://images.unsplash.com/photo-1519794206461-cccd885bf209?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  'https://media.gettyimages.com/photos/downtown-manhattan-new-york-jersey-city-golden-hour-sunset-picture-id910867946?s=612x612'
]
function rand(){
  return img[Math.floor(Math.random()*img.length)];
}
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
      arr: [...prevState.arr, placeName]
    }))
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Inputting
          addItem={this.addItem}
        />
        <List places={this.state.arr}
        image={rand()}/>
      </View>
    );
  }
}
