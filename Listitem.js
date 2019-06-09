import React from 'react'
import { Platform,View,Image, Text, StyleSheet,Modal,TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
export default class Listitem extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        modalVisible: false,
      };
    }
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      render(){
    return (
        <View style={{marginTop: 22}}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}>
        <View style={{alignItems:"center",flex:1,width:"100%"}}>
                  <View style={styles.modalStyle}>
                  <Image source={{uri:this.props.image}} style={{marginTop:20,height:200,width:200}}/>
        <Text style={{...styles.listItem,fontSize:20}}>{this.props.name}</Text>
        <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={{marginTop:20,fontSize:25}}>Hide Modal</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>{this.props.changeState(this.props.index);this.setModalVisible(false)}}>
               <Text style={{marginTop:20,fontSize:25}}>Delete Place</Text> 
              </TouchableHighlight>
              </View>
             </View>
                </Modal>
        <TouchableWithoutFeedback onPress={() => {this.setModalVisible(true);}}>
        <View style={styles.cont}>
        <Image source={{uri:this.props.image}} style={{marginLeft:20,height:50,width:50}}/>
        <Text style={styles.listItem}>{this.props.name}</Text>
        </View>
        </TouchableWithoutFeedback>
        </View>
    )
            }
}

const styles = StyleSheet.create({
    cont:{
        borderRadius:40,
        borderWidth:5,
        height:70,
        borderColor:"red",
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    listItem: {
        textAlign: "center",
        justifyContent: "center",
        padding: 10
      },
      modalStyle:{
          flex:1,
      }
    })