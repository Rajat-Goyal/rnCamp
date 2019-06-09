import React, {Component} from 'react'
import {TextInput,Text,View , StyleSheet} from 'react-native'

export default function DisplayList(props) {
    return (
        <View style={styles.container}>
              {props.list.map(item=>{
                return (
                <Text>{item}
                </Text>
              )
               
            })}  
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:4
}

})


