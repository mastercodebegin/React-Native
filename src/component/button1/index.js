import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';
const CustomButton1 = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    height: 50,
    width: '100%',
    
    backgroundColor: colors.blue,
    opacity: 87,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
  },
  buttonText: {
    alignSelf:'center',
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
});

export default CustomButton1;
