import React from 'react'
import { Platform, StyleSheet, View } from 'react-native';
import Listitem from './Listitem';
export default function List(props) {
    return (
        <View style={styles.listing}>
          {props.places.map((item) => {
            return <Listitem name={item} image={props.image}/>;
          })}
        </View>
    )
}
const styles = StyleSheet.create({
listing: {
    flex: 7,
    justifyContent: "flex-start",
    flexDirection: 'column',
  }
})