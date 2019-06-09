import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListItem from "../ListItem";



export default class ListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      placeList: props.placeList
    }
  }s

  filterMap = (user) =>{
    this.state.placeList.filter(function(user){
      return !user;
    })
  }

  render() {
    return (
      <View style={styles.placeListContainer}>
        {this.state.placeList.map((place, idx) => {
          return (
            <ListItem
              key={idx}
              placeName={place.placeName}
              placeImage={place.placeImage}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeListContainer: {
    flex: 7,
    justifyContent: "flex-start",
    flexDirection: "column"
  }
})

