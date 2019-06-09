import React, { Component } from "react";
import { View, Button } from "react-base";
// import { tsPropertySignature } from "@babel/types";


export default ResetButton = (props) => {

    return (
        <View>
            <button onPress={props.resetfunc}>
                RESET INPUT
            </button>
        </View>
    )

}