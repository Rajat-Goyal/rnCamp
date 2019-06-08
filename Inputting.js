import {Button, TextInput, View, StyleSheet} from 'react-native';
import React, { Component } from 'react'
var col="blue";
export default class Inputting extends Component {
   
   constructor(props){
       super(props);
   this.state={
        placeName:this.props.placeName,
    }
}
placeChange(val) {
  let len=val.length;
  col="blue"
  if(len>=5)col="green"
  if(len>=10)col="yellow"
  if(len===15)col="red"
    this.setState({
      placeName: val.toLowerCase(),
    })
  }
    render() {
        return (
            <View style={styles.container}>
            <TextInput 
            value={this.state.placeName} 
            autoFocus={true}
             placeholder={"I want to go to.."}
             maxLength={15}
             style={{...styles.placeInput,borderBottomColor: col}}
              onChangeText={(val)=>{this.placeChange(val)}}/>
              <Button
              title={"Add"}
              onPress={() => {this.props.addItem(this.state.placeName);this.setState({placeName:""})}}
              />
            </View>
        )
    }
}
const styles = StyleSheet.create({
placeInput: {
  borderBottomWidth: 2,
  width: "85%",
  marginRight:10
},
container: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  flexDirection: 'row'
}
})

