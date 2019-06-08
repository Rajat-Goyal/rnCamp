import React,{Component} from 'react'
import { Platform, StyleSheet, ScrollView,View } from 'react-native';
import Listitem from './Listitem';
export default class List extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex:7,justifyContent:"flex-start"}}>
        <ScrollView style={styles.listing}>
          {this.props.places.map((item) => {
         return <Listitem name={item} image={this.props.image} changeState={this.props.changeState}/>;
          })}
        </ScrollView>
        </View>
    )
        }
}
const styles = StyleSheet.create({
listing: {
    flexDirection: 'column',
  }
})