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
  StyleSheet,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import {useDispatch, useSelector} from 'react-redux';
//import Toast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-community/async-storage';
// import storage from '../../../component/storage';
import TitleText from '../../../component/TitleText';
import InputText from '../../../component/TextInput';
import CustomButton from '../../../component/button';
import CustomButton1 from '../../../component/button1';
import Toast from 'react-native-simple-toast';

const Registration1 = () => {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  // const dispatch = useDispatch();
  // const isFetching = useSelector((state) => state.isFetching);

  useEffect(() => {});

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

// validate = (text) => {
//   console.log(text);
//   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (reg.test(text) === false) {
//     console.log("Email is Not Correct");
//     this.setState({ email: text })
//     return false;
//   }
//   else {
//     this.setState({ email: text })
//     console.log("Email is Correct");
//   }
// }
const doRegister = async () => {
  //const Password = await AsyncStorage.getItem(storage.Password);

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(Email) === false) {
    Toast.show("Please Enter a valid Email address.");
  } else if (Password.length <= 3) {
    Toast.show('Please Enter atlest 4 digits for password');
  } else if (Password == '') {
    Toast.show('Please Enter Password');
  //} else if (Name == '') {
  //   Toast.show('Please Enter Name');
  // } else if (LastName == '') {
  //   Toast.show('Please Enter LastName');
  } else {
    // dispatch({
    //   type: 'User_Register_Request',
    //   url: 'v1/user/register',
    //   Username,
    //   Email,
    //   Password,
    //   Name,
    //   LastName,
    //   props: navigation,
    // });
    
    navigation.navigate('Registration2')
    
  }
};


  return (
    <View style={{flex: 1}}>
      

        <ScrollView contentContainerStyle={styles.scroll}>
         
           
            <View style={styles.logoContainer}>
              <Text>Welcome to</Text>
              <TitleText title={'Sign Up'.toUpperCase()} />
            </View>

            <View style={{justifyContent:'center',alignItems:'center'}}>

            
            <CustomButton 

            source ={require('../../../assets/icons/google.png')}
            title="Google" onPress={()=>{Alert.alert('hi')}} />
            <CustomButton 
            source ={require('../../../assets/icons/tweeter.png')}
            title="Tweeter" onPress={()=>{Alert.alert('hi')}} />
            <Text style={{marginVertical:20,textAlign:'center'}}>OR</Text>
            <InputText
            placeholder='E-Mail'
            onChangeText={(text) => setEmail(text)}
            />
            <InputText
            secureTextEntry={true}
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            />

            <CustomButton1 
            style={{width:'35%',alignSelf:'flex-end',backgroundColor:colors.grey,borderRadius:20,marginTop:15}}
            textStyle={{color:colors.darkBlue,}}
            onPress={doRegister}
            title="Next" />

            </View>
                       </ScrollView>
      
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default Registration1;

const yy = StyleSheet.create({
  yy:{
    alignSelf:'flex-end'
  }
})