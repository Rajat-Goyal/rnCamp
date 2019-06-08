import React from 'react'
import { Platform,View,Image, Text, StyleSheet } from 'react-native';
export default function Listitem(props) {
    return (
        <View style={styles.cont}>
        <Image source={{uri:props.image}} style={{marginLeft:20,height:50,width:50}}/>
        <Text style={styles.listItem}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
        borderRadius:40,
        borderWidth:5,
        height:70,
        borderColor:"red",
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    listItem: {
        textAlign: "center",
        justifyContent: "center",
        padding: 10
      }
    })