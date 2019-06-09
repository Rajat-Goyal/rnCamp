import React, { Component } from "react";
import { View, Button } from "react-native";
// import { tsPropertySignature } from "@babel/types";


export default ResetButton = (props) => {

    return (
        <View>
            <Button title={"RESET"} onPress={props.resetfunc}>
            </Button>
        </View>
    )

}