import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: ""
    };
  }

  onChangInput = val => {
    this.setState(prevState => {
      return {
        placeName: val.toLowerCase()
      };
    });
  };

  wrapperFunc = () => {
    this.props.onAdd(this.state.placeName);
    this.setState({
        placeName: "" 
    })
  };

  resetText = () =>{
    this.setState({
      placeName: ""
    })
  };
  

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          onChangeText={val => this.onChangInput(val)}
          placeholder={"I want to go to .."}
          autoFocus={true}
          style={styles.textInput}
        />
        <Button
          title={"Add"}
          onPress={this.wrapperFunc}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },
  textInput: {
    width: "80%"
  }
});

export default InputContainer;
