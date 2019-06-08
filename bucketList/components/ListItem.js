import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default ListItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={props.placeImage} style={styles.placeImage}/>
            <Text style={styles.placeName}>{props.placeName}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    itemContainer:{
        borderRadius: 40, 
        borderWidth: 5, 
        height: 70, 
        borderColor: "red",
        width:'100%',
        flexDirection:"row",
        alignItems: "center",
        marginTop: 10
    },
    placeImage:{
        width:50,
        height:50,
        marginLeft: 20 
    },
    placeName:{
        fontSize:30,
        marginLeft:30 
    }
})