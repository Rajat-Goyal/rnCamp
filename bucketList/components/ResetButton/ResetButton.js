import React from 'react'
import { View, Button } from 'react-native';

export default Reset = (props) =>{
    return(
        <View >
            <Button  title={"RESET KAREGA?"} onPress={props.resetHandler}></Button>
        </View>
    )
}