import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ListItem from "../ListItem";


export default ListContainer = (props) => { 
    return (
        <View style={styles.placeListContainer}>
          {props.placeList.map((place, idx) => {
            return (
              <ListItem
                key={idx}
                placeName={place.placeName}
                placeImage={place.placeImage}
               // {...props}
              />
            );
          })}
        </View>
    ); 
}

const styles= StyleSheet.create({
    placeListContainer: {
        flex:7,
        justifyContent:"flex-start",
        flexDirection:"column"
    }
})

