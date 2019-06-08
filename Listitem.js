import React from 'react'
import { Platform,View,Image, Text, StyleSheet } from 'react-native';
export default function Listitem(props) {
    return (
        <View style={{flex:1,flexDirection:"row"}}>
        <Image source={{uri:props.image}} style={{height:30,width:50}}/>
        <Text style={styles.listItem}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        textAlign: "center",
        justifyContent: "center",
        padding: 10
      }
    })