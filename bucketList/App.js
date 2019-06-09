
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import AddToList from './AddToList'
import DisplayList from './DisplayList'

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  
  state = {
    placeName: "",
    placeList : []
  }
  
  onChangeInput = (val) => {
    // if(this.state.placeName.trim() === '')
    //   return;
    //console.log("vishal")
    //alert(val);
    this.setState(prevState => {
      return {
        placeName: val.toLowerCase()
      };
    });
  };

  placeAddHandler= () =>{
        this.setState(prevState=>{
          console.log("asd")
          return {
            placeList : prevState.placeList.concat(this.state.placeName),
            placeName: ''
          }

          
        })
  }

  

  render() {
    return (
      <View style={styles.container}>
           <AddToList 
            val={this.state.placeName}
            inputDisplay={this.onChangeInput}

            placeAddHandler={this.placeAddHandler} 
           />
           <DisplayList list={this.state.placeList}/>  
        
      </View>
        // <View style={styles.container}>
        //    <View style={styles.container1}>
        //   <TextInput
        //     value={this.state.placeName}
        //     onChangeText={val => this.onChangInput(val)}
            
        //     style={styles.placeInput}
        //   />
        //   <Button title={"Add"} onPress={this.placeAddHandler}/>
        //   </View>
        //   <View style={styles.container2}>
        //       {this.state.placeList.map(item=>{
        //         return (
        //         <Text>{item}
        //         </Text>
        //       )
               
        //     })}
        //        />
        //   </View>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //flexDirection: 'row',
  },
  // container1: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "green",
  //   flexDirection: 'row'
  // },
  // container2: {
  //   flex: 4,
  //   //justifyContent: "center",
  //   //alignItems: "center",
  //   //backgroundColor: ""
  // },
  
  // welcome: {
  //   fontSize: 20,
  //   textAlign: "center",
  //   margin: 10
  // },
  // instructions: {
  //   textAlign: "center",
  //   color: "#333333",
  //   marginBottom: 5
  // },
  // placeInput: {
  //   borderBottomColor: "blue",
  //   borderBottomWidth: 2
  // }
});