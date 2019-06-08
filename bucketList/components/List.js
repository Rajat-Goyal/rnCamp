import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, Image, Button, Text } from "react-native";

const List = (props) => {
    return(
        // <View style={styles.container}>
               <View style={styles.container1}>
            <Image 
            style={styles.imageStyle}
            source={{uri: props.url}}
            /> 
        <Text style={styles.textStyle}>
            {props.value}
        </Text>
    </View>
        // </View>
     
    )
    
};

const styles = StyleSheet.create({
    // container: {
    //    width: "100%",
    //     alignItems: "flex-start",
    //     borderRadius: 20,
    //     borderWidth: 1.5,
    //    padding: 10,
    //     borderColor: "black",
    //     marginBottom: 5
    // },
    container1:{
        width: "100%",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 1.5,
       padding: 5,
        borderColor: "black",
        marginBottom: 5,
        flexDirection: "row"
    },
    textStyle: {
        color: "grey",
        fontSize: 30,
        padding:10
        
    },
    imageStyle:{
        marginLeft: 10,
        width: 70,
        height: 70
    }

});

export default List; 
