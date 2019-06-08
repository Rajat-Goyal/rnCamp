import React,{Component} from 'react'
import { Platform, StyleSheet, ScrollView,View } from 'react-native';
import Listitem from './Listitem';
const img=[
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg/1200px-City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg',
  'https://images.unsplash.com/photo-1519794206461-cccd885bf209?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  'https://media.gettyimages.com/photos/downtown-manhattan-new-york-jersey-city-golden-hour-sunset-picture-id910867946?s=612x612'
]
function rand(){
  return img[Math.floor(Math.random()*img.length)];
}
export default class List extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex:7,justifyContent:"flex-start"}}>
        <ScrollView style={styles.listing}>
          {this.props.places.map((item) => {
         return <Listitem name={item} image={rand()} changeState={this.props.changeState}/>;
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