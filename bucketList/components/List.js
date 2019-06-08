import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
//import { url } from 'inspector';

export default List = (props) =>{
    //alert(props.url)
    return(
    <View style={styles.display}>
        <Image style={styles.imgStyle} source={{uri: props.url}}/>
        <Text style={styles.textStyle}>{props.value}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    display: {
        borderRadius: 40,
        borderWidth: 5,
        height: 70,
        borderColor: 'red',
        width: '100%',
        marginTop: 10,
       // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        marginLeft: 30
        
    },
    imgStyle:{
        width:50,
        height: 50,
        marginLeft: 20


    }
})