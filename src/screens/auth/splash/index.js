import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, View, StatusBar, Alert, Text, Platform} from 'react-native';
//import styles from './style';
import {useNavigation} from '@react-navigation/native';
//import CustomHeader from '../../../component/header';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';
import TitleText from '../../../component/TitleText';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    directCall();
    // apiCall();
  }, []);

  const directCall = async () => {
      setTimeout(() => navigation.replace('Registration1'), 2000);
    //   let Username = await AsyncStorage.getItem(storage.Username);

    // if (Username == null) {
    //   setTimeout(() => navigation.replace('Registration1'), 2000);
    // } else {
    //   setTimeout(() => navigation.replace('Home'), 2000);
    // }
  };
//   const apiCall = async () => {
//     await fetch('https://backstage.surphaces.com/wp-json/wp/v1/app/vesion')
//       .then((res) => res.json())
//       .then((response) => setVersion(response));
//   };
  return (
    <View style={{flex: 1}}>
      
        <View style={{flex:1,backgroundColor:colors.blue,justifyContent:'center',alignItems:'center'}}>
          <Text
          style={{color:colors.white,fontSize:40,fontWeight:'bold',fontFamily: Platform.OS === 'ios' ? 'AppleSDGothicNeo-Bold' : 'Roboto'}}>
              Conferenso
          </Text>

        </View>
      
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  );
};

export default SplashScreen;
