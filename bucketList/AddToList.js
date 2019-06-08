import React, {Component} from 'react'
import {TextInput,View , StyleSheet,Button} from 'react-native'




export function AddToList(props) {
    // onChangInput = val => {
        
    //     value=val
    //     // if(this.state.placeName.trim() === '')
    //     //   return;
    //     // this.setState(prevState => {
    //     //   return {
    //     //     placeName:props.value.toLowerCase()
    //     //   };
    //     // });
    //   };
    
    return (
        <View style={styles.container}>
            <TextInput
            value={props.val}
            onChangeText={props.onChangeInput(this.value)}
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


