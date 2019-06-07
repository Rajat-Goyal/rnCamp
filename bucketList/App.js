/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
/////////////////////////////////////////////////////////////
class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    onChangeInput=(val)=>
    {
      if(this.state.pl)
      this.setState(prevState =>{
        return ({
          placeName:val.toLower
        })
      }
    }
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{ styles.container}}>
       <TextInput value={this.state.placeName} onChangeText
     </View>
    );
  }
}



///////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
