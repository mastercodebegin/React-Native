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
const PaymentGateway = () => {

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
      
      <View style={{flex: 1, backgroundColor:colors.white}}>
        

        

          <View style={{backgroundColor:colors.midGrey,marginTop:10,padding:10,borderRadius:25,height:'83.6%'}}>
        <Text style={{fontSize:22,fontWeight:'500',marginTop:30,marginBottom:10}} >Payment Gateway</Text>


        <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,padding:15}}>
          <Text style={{fontWeight:'400',fontSize:20,}} >Credit Card</Text>
        <Icon name="chevron-right" style={{marginRight:10  }} size={25} color={colors.black} /> 
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,padding:15}}>
          <Text style={{fontWeight:'400',fontSize:20,}} >Debit Card</Text>
        <Icon name="chevron-right" style={{marginRight:10  }} size={25} color={colors.black} /> 
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,padding:15}}>
          <Text style={{fontWeight:'400',fontSize:20,}} >Net Banking</Text>
        <Icon name="chevron-right" style={{marginRight:10  }} size={25} color={colors.black} /> 
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,borderBottomWidth:1,padding:15}}>
          <Text style={{fontWeight:'400',fontSize:20,}} >UPI</Text>
        <Icon name="chevron-right" style={{marginRight:10  }} size={25} color={colors.black} /> 
        </View>
        
        

          </View>
          <View style={{position:'absolute',bottom:0,width:'100%',flexDirection:'row',backgroundColor:colors.Darkgrey,justifyContent:'space-between',alignItems:'center',padding:20,height:'15%'}} >
        <Text style={{fontSize:25,color:colors.Icongrey,fontWeight:'700'}} >{'$249'}</Text>
      <CustomButton1
          onPress={() => {
            navigation.navigate('PaymentConfirmation');
          }}
          style={{
            width: '50%',
            alignSelf: 'center',
            height:60
          }}
          textStyle={{color:colors.white,fontSize:20,}}
          title="Checkout"
        />
      </View>

       
      
      
      
      
      
      </View>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default PaymentGateway;

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
