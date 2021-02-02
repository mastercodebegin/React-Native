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
const ReviewSubmission = () => {

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
      
      <View style={{flex: 1, paddingHorizontal: 10,backgroundColor:colors.white}}>
        
        <Text style={{fontSize:22,fontWeight:'500',marginTop:30,marginBottom:10}} >Submission</Text>

        <View style={{backgroundColor:colors.Darkgrey,paddingTop:10,paddingHorizontal:10        }}>
        <CustomButton1
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            width: '40%',
            alignItems:'flex-start',
            marginRight:10,
            backgroundColor:colors.Icongrey           
          }}
          textStyle={{color:colors.white,alignSelf:'flex-start',padding:10}}
          title="Paper"
        />
        </View>

          <View style={{backgroundColor:colors.midGrey,marginTop:10,padding:10,flex:1}}>
          <Text style={{fontWeight:'bold',fontSize:16,}} >Title</Text>
          <Text style={{paddingHorizontal:10,fontSize:16,marginBottom:10}} >Can voilent games can affect aggression</Text>
          <Text style={{fontWeight:'bold',fontSize:16,}} >Authors</Text>
          <Text style={{paddingHorizontal:10,fontSize:16,marginBottom:10}} >Astha Sharma</Text>
          <Text style={{fontWeight:'bold',fontSize:16,}} >Abstract</Text>
          <Text style={{paddingHorizontal:10,fontSize:16,marginBottom:10}} >{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</Text>
          <Text style={{fontWeight:'bold',fontSize:16,}} >Keywords</Text>
          <Text style={{paddingHorizontal:10,fontSize:16,marginBottom:10}} >{'Aggressiveness,video games,voilance'}</Text>
          <Text style={{fontWeight:'bold',fontSize:16,}} >Subbmission format</Text>
          <Text style={{paddingHorizontal:10,fontSize:16,marginBottom:10}} >{'Oral'}</Text>
         
      

          </View>
          <View style={{flexDirection:'row',backgroundColor:colors.Darkgrey ,marginTop:15,alignItems:'center',position:'absolute',bottom:10,}} >
          <View style={{width:'20%',padding:10,justifyContent:'center',alignItems:'center'}}>
          <Icon name="pencil-outline" style={{marginRight:10  }} size={25} color={colors.black} /> 
      <Text style={{fontSize:12,marginTop:8}} >Edit</Text>
          </View>
          <View style={{width:'20%',padding:10,justifyContent:'center',alignItems:'center'}}>
          <Icon name="delete" style={{marginRight:10  }} size={25} color={colors.black} /> 
      <Text style={{fontSize:12,marginTop:8}} >Delete</Text>
          </View>
        
        <CustomButton1
          onPress={() => {
            navigation.navigate('PaymentGateway');
          }}
          style={{
            width: '20%',
            alignSelf: 'center', 
            marginRight:10           
          }}
          textStyle={{color:colors.white}}
          title="Submit"
        />
          <View style={{width:'20%',padding:10,justifyContent:'center',alignItems:'center'}}>
          <Icon name="contact-support" style={{marginRight:10  }} size={25} color={colors.black} /> 
      <Text style={{fontSize:12,marginTop:8}} >Withdraw</Text>
          </View>
          <View style={{width:'20%',padding:10,justifyContent:'center',alignItems:'center'}}>
          <Icon name="contact-support" style={{marginRight:10  }} size={25} color={colors.black} /> 
      <Text style={{fontSize:12,marginTop:8}} >Contact</Text>
      <Text style={{fontSize:12,marginTop:8}} >Organiser</Text>
          </View>
      </View>

       
      
      
      
      
      
      </View>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default ReviewSubmission;

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
