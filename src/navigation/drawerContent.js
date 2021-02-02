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
  Linking,
} from 'react-native';
//import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import CustomHeader from '../component/header';
import colors from '../component/colors';
import {useDispatch, useSelector} from 'react-redux';
//import Toast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-community/async-storage';
// import storage from '../../../component/storage';
import CustomText from '../component/TitleText';
import TitleText from '../component/TitleText';
import InputText from '../component/TextInput';
import CustomButton1 from '../component/button1';
import SimpleToast from 'react-native-simple-toast';
import {HeaderTitle} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.grey}}>
      <DrawerContentScrollView {...props}>
        <TitleText style={{alignSelf: 'flex-start'}} />

        <FlatList
          data={intrest}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
              }}>
              <Icon
                style={{marginHorizontal: 10}}                
                name="alpha-y"
                size={25}
                color="#900"
              />
              <Text style={{fontSize: 16}}>{item.title}</Text>
            </View>
          )}
        />
        

        <TouchableOpacity
              onPress={()=>{navigation.navigate('Favorites')}}
          style={{
              borderTopWidth:1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <Icon
            style={{marginHorizontal: 10}}
            name="heart"
            size={25}
            color="#000000"
          />
          <Text style={{fontSize: 16}}>{'Favorite Events'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Updates')}}
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <Icon
            style={{marginHorizontal: 10}}
            name="update"
            size={30}
            color="#000000"
            color="#000000"
          />
          <Text style={{fontSize: 16}}>{'All Updates'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={()=>{navigation.navigate('ConferenceProfile')}}
          style={{
            borderTopWidth:0.8,
            borderBottomWidth: 0.8, 
              
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,    
          }}> 
          <Text style={{fontSize: 16,marginHorizontal:50}}>{'Manage Conference'}</Text>
        </TouchableOpacity>              
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <Icon
            style={{marginHorizontal: 10}}
            name="cog"
            size={30}
            color="#000000"
            color="#000000"
          />
          <Text style={{fontSize: 16}}>{'Settings'}</Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <Icon
            style={{marginHorizontal: 10}}
            name="help-circle"
            size={30}
            color="#000000"
            color="#000000"
          />
          <Text style={{fontSize: 16}}>{'Help'}</Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <Icon
            style={{marginHorizontal: 10}}
            name="account-supervisor-circle"
            size={30}
            color="#000000"
            color="#000000"
          />
          <Text style={{fontSize: 16}}>{'Invite a friend'}</Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <Icon
            style={{marginHorizontal: 10}}
            name="history"
            size={30}
            color="#000000"
            color="#000000"
          />
          <Text style={{fontSize: 16}}>{'History'}</Text>
        </View>
      </DrawerContentScrollView>
      {/* <DrawerItemList {...props} /> */}
      <View >
      <View
          style={{
              borderTopWidth:0.5,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            marginBottom:50
          }}>

          <Text style={{fontSize: 16,fontWeight:'bold',marginLeft:60}}>{'About'}</Text>
        </View>
      </View>
    </View>
  );
}

const intrest = [
  {
    id: 1,
    title: 'Psychology',
  },
  {
    id: 2,
    title: 'psychiatry',
  },
  {
    id: 3,
    title: 'Social Work',
  },
];
