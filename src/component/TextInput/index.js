import React from 'react';
import { ImagePropTypes, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from '../colors';
const CustomButton = (props)=>{
return(

        <TextInput
        {...props}
        
                style={[styles.textInput,props.style]}
                placeholder={props.placeholder}
                placeholderTextColor={colors.black}
                // secureTextEntry={false}
                
                onChangeText = {props.onChangeText}
                //onChangeText = {()=>props.onChangeText}
              />
    )
}
const styles = StyleSheet.create({
    textInput: {
      width:'100%',
        height:50,
        marginTop: 10,
        backgroundColor: colors.white,
        paddingHorizontal:10,
        borderWidth: 1,   
        borderRadius: 5,
        borderColor: colors.Darkgrey
    
      },
    
})

export default CustomButton;