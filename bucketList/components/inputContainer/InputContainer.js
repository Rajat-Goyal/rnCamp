import React, {Component} from 'react'
import {TextInput, View, StyleSheet, Button} from 'react-native'


class InputContainer extends Component{
    constructor(props){
        super(props)
        this.state=({
            placeName: ""
        })
    };

    onChangInput = val => {
        this.setState(prevState => {
          return {
            placeName: val.toLowerCase()
          };
        });
      };

      wrapperFunc=()=>{
          this.props.onAdd(this.state.placeName);
          this.setState({
              placeName:""
          })
      }


render(){
    return(
        <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          onChangeText={val => this.onChangInput(val)}
          placeholder={"I want to go to this place .."}
          autoFocus={true}
          style={styles.placeInput}
        />
        <Button title={"Add"} onPress={this.wrapperFunc} />
        </View>
        )
}
}
export default InputContainer;
