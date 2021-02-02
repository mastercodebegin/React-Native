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
const ErollConference2 = () => {
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
        <TitleText style={{alignSelf:'flex-start'}} />
        <Text style={{fontSize:20,fontWeight:'400',marginVertical:30,marginTop:20}} >13 days untill submission closes</Text>

        <Text style={{fontSize:20,fontWeight:'bold',color:colors.blue,marginVertical:20}} >Submit a paper...</Text>
      <TouchableOpacity style={{marginTop:20,borderWidth:2,width:'80%',justifyContent:'center',alignItems:'center',alignSelf:'center',padding:10,borderColor:colors.blue,borderRadius:8}} >
        <Text style={{fontSize:18,fontWeight:'bold',color:colors.blue}} >Oral Presentation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:2,width:'80%',justifyContent:'center',alignItems:'center',alignSelf:'center',padding:10,borderColor:colors.blue,borderRadius:8,marginTop:30}} >
        <Text style={{fontSize:18,fontWeight:'bold',color:colors.blue}} >Poster Presentation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:2,width:'80%',justifyContent:'center',alignItems:'center',alignSelf:'center',padding:10,borderColor:colors.blue,borderRadius:8,marginTop:30}} >
        <Text style={{fontSize:18,fontWeight:'bold',color:colors.blue}} >Virtual Presentation</Text>
      </TouchableOpacity>

      <CustomButton1
          onPress={() => {
            navigation.navigate('PaperSubmit');
          }}
          style={{
            marginTop:60,
            width: '50%',
            alignSelf: 'center',            
          }}
          textStyle={{color:colors.white}}
          title="Submit Abstract"
        />

        <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',color:colors.blue,marginVertical:20}} >Submit Later</Text>
        

        
      </View>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default ErollConference2;

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
