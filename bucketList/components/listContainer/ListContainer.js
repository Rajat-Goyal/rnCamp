import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from '../list'

export default ListContainer=(props) =>{
    return(
        <View style={styles.placeListContainer} >
        {props.placeList.map((value,index) => {
          return(
            <List 
            key={index} 
            placeName={value.placeName}
            placeImage={value.placeImage}
            />
          )
         
        })
        }
        </View>
        
        )
        
}




export default ListContainer;