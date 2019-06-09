import React, {Component} from 'react'
import {TextInput,View , StyleSheet,Button} from 'react-native'
//import console = require('console');
//import console = require('console');




export default function AddToList(props) {



   
     
    
    return (
            
         <View style={styles.container}>
             
             <TextInput
            
             value={props.val}
             onChangeText={ref=>props.inputDisplay(ref)}
             placeholder={"I want to go to .."}
             autoFocus={true}
            
            
             />
             <Button title={"Add"} onPress={props.placeAddHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
}

})


