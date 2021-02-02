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
} from 'react-native';
import styles from './style';
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

const Registration2 = () => {
  const navigation = useNavigation();
   const [Otp, setOtp] = useState('');
   const [mobile,setMobile]= useState('');
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');
//   const [Name, setName] = useState('');
//   const [LastName, setLastName] = useState('');
//   const dispatch = useDispatch();
//   const isFetching = useSelector((state) => state.isFetching);

//   useEffect(() => {});

//   const doRegister = async () => {
//     const Password = await AsyncStorage.getItem(storage.Password);

//     if (Username == '') {
//       Toast.show('Please Enter Username');
//     } else if (Email == '') {
//       Toast.show('Please Enter Email');
//     } else if (Password == '') {
//       Toast.show('Please Enter Password');
//     } else if (Name == '') {
//       Toast.show('Please Enter Name');
//     } else if (LastName == '') {
//       Toast.show('Please Enter LastName');
//     } else {
//       dispatch({
//         type: 'User_Register_Request',
//         url: 'v1/user/register',
//         Username,
//         Email,
//         Password,
//         Name,
//         LastName,
//         props: navigation,
//       });
//     }
//   };

const doValidate=async ()=>{

  if (mobile=='' ) {
    SimpleToast.show('Please enter valid mobile no.')
  }
  else if ( mobile.length != 10 ) {
    SimpleToast.show('Please enter 10 digit valid mobile no.')}
  
  else   if(Otp ==''){
    SimpleToast.show('Please Enter OTP')
  
  } else {
    navigation.navigate('Registration3')
  }
}
  return (
    <View style={{flex: 1}}>

        <ScrollView contentContainerStyle={styles.scroll}>
          <View
            style={{
              flex: 1,paddingHorizontal:20
            }}>
            
            <View style={styles.logoContainer}>
              <Text>Welcome to</Text>
              <TitleText title={'Sign Up'.toUpperCase()} />
            </View>

            <View style={{justifyContent:'center',alignItems:'center'}}>
            <InputText
            keyboardType='numeric'
            placeholder='Mobile'
            onChangeText={(text)=>setMobile(text)}
            />
            
            
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',marginTop:15}} >
              <CustomText 
              style={{fontWeight:'bold',}}

              title={'Resend OTP'}/>
            <CustomButton1
            onPress={doValidate}
            style={{width:'50%'}}
            title="Send OTP" />
             </View>

             <View style={{marginTop:150,width:'100%'}} >

             <InputText
            placeholder='OTP'
            onChangeText={(text)=>{setOtp(text)}}
            />
            <CustomButton1
            onPress={doValidate}
            style={{width:'50%',alignSelf:'flex-end',marginTop:15}}
            title="NEXT" />
            </View>
            </View>
          </View>
        </ScrollView>
      
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default Registration2;
