import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

const CustomText =(props)=>{
return(
    <View>
        <Text
            style={[styles.text,props.style]}>
            {props.title}            
          </Text>
    </View>
)
}
const styles = StyleSheet.create({
    headerText:{
        margin:13,
        textAlign:'center',        
        fontSize:14,
        fontFamily:'Arial',
        fontWeight:'bold'
      },
})

export default CustomText;