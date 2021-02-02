import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

const TitleText =(props)=>{
return(
    <View style={[styles.headerTextView,props.style]} >
        <Text
            style={[styles.headerText,props.style]}>
            {/* {props.title} */}
            ACADEMEET
          </Text>
    </View>
)
}
const styles = StyleSheet.create({
    headerTextView:
    {alignSelf:'center'},
    headerText:{
        margin:13,
        
        color:colors.blue,
        fontSize:22,
        fontFamily:'Arial',
        fontWeight:'bold'
      },
})

export default TitleText;