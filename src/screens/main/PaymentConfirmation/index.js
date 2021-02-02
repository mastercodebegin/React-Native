import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  BackHandler,
  ScrollView,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
//import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import {useDispatch, useSelector} from 'react-redux';
//import Toast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-community/async-storage';
// import storage from '../../../component/storage';
import CustomText from '../../../component/text';
import TitleText from '../../../component/TitleText';
import InputText from '../../../component/TextInput';
import CustomButton1 from '../../../component/button1';
import SimpleToast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
let fill = [];
const PaymentConfirmation = () => {

  const navigation = useNavigation();

  const [isShowingText, setIsShowingText] = useState('hey');

  loadsearch = (text) => {
    intrest = fill;
    setIsShowingText(text);
    const newData = intrest.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    fill = newData;

    if (newData == '') {
      SimpleToast.show('No item found');
      //return <Text style={{fontSize: 15}}>{'no item found'}</Text>;
    }
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: colors.white,
        }}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.grey}}>
      
      <View style={{flex: 1, backgroundColor:colors.white,justifyContent:'center',alignItems:'center'}}>
        

        

          
        <Text style={{fontSize:25,fontWeight:'500',marginTop:30,marginBottom:10,textAlign:'center'}} >Payment Successful</Text>


        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image
          style={{height:200,width:200}}
          source={require('../../../assets/icons/check.png')}
          />
        </View>
        <Text style={{fontWeight:'400',fontSize:20,marginVertical:10}} >$399</Text>
        <Text style={{fontWeight:'400',fontSize:20,textAlign:'center',marginVertical:20}} >{`Your payment is complete\nplease check your schedule and\nother information at status pages`}</Text>
        <CustomButton1
          onPress={() => {
            navigation.navigate('Homee');
          }}
          style={{
            width: '90%',
            alignSelf: 'center',
            height:60,
            marginTop:20,
            borderRadius:20,
            backgroundColor:colors.Darkgrey
          }}
          textStyle={{fontSize:20,}}
          title="Go to Homepage"
        />
        </View>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default PaymentConfirmation;

const intrest = [
  {
    id: 1,
    title: 'Explore our content themes',
  },
  {
    id: 2,
    title: 'Marketing and media',
  },
  {
    id: 3,
    title: 'Society',
  },
  {
    id: 1,
    title: 'Developers and data',
  },
  {
    id: 2,
    title: 'Commerce',
  },
  {
    id: 3,
    title: 'Business development',
  },
  {
    id: 3,
    title: 'Lifestyle',
  },
];
const data = [
  {
    id: 1,
    title: 'Explore our content themes',
  },
  {
    id: 2,
    title: 'Marketing and media',
  },
  {
    id: 3,
    title: 'Society',
  },
];
