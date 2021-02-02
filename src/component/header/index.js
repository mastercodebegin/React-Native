import React, { useEffect } from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';

import { useNavigation } from '@react-navigation/native';


const CustomHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconmain}
        onPress={() => { navigation.goBack(null) }}
      >
        <Image source={require('../../assets/icons/arrow1.png')}
          style={styles.icon}
          // style={{ tintColor: '#fff' }}
          resizeMode={'contain'}

        />
      </TouchableOpacity>

    </View>

  );
}

export default (CustomHeader);
