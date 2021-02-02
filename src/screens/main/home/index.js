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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
let fill = [];
const Home = () => {
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
    <View style={{flex: 1, backgroundColor: colors.white}}>
      
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <View
          style={{
            flex: 1, shadowColor: "#000",
            
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TitleText style={{alignSelf: 'flex-start'}} />
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                  tintColor: colors.Icongrey,
                  marginRight: 15,
                }}
                source={require('../../../assets/icons/drop.png')}
              />
              <Image
                style={{height: 25, width: 25, tintColor: colors.Icongrey}}
                source={require('../../../assets/icons/bell.png')}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              borderWidth: 1,
              borderColor: colors.Darkgrey,
              padding: 5,
            }}>
              <Icon
                onPress={() => {
                  navigation.toggleDrawer();
                }}
                name="menu"
                size={30}
                color={colors.textGrey}
              />
            
            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.black}
              style={{width: '75%', alignSelf: 'center', padding: 10}}
              onChangeText={(search) => {
                this.loadsearch(search);
              }}
            />

            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                tintColor: colors.Icongrey,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.Icongrey,
                borderRadius: 20,
              }}>
              
              <Icon1
                onPress={() => {
                  navigation.toggleDrawer();
                }}
                name="user-circle"
                size={30}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={intrest}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorCo mponent={itemSeparator}
            //numColumns={2}
            //ItemSeparatorComponent={renderSeparator}
            renderItem={({item}) => (
              <View
                style={{shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.90,
                shadowRadius: 3.84,
                
                elevation: 8,
                  marginTop: 15,
                  backgroundColor: colors.grey,
                  padding: 10,
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      tintColor: colors.Icongrey,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.Icongrey,
                      borderRadius: 200,
                    }}>
                    <Image
                      style={{
                        height: 80,
                        width: 80,
                        tintColor: colors.grey,
                      }}
                      //source={require('../../../assets/icons/profile.png')}
                    />
                  </View>
                  <View style={{marginLeft: 10, width: '70%'}}>
                    <Text style={{fontSize: 25, textAlign: 'left'}}>
                      31st International neurotoxin association{' '}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          marginTop: 15,
                          alignSelf: 'flex-start',
                        }}>
                        Monteral, Canada
                      </Text>
                      {/* <Image
              style={{
                marginTop:10,
                height: 55,
                width: 55,
                tintColor: colors.Icongrey,
                marginLeft: 45,
                
              }}
              source={require('../../../assets/icons/plus.png')}
              /> */}

                      <Icon
                        style={{marginTop: 10}}
                        onPress={() => {
                          navigation.toggleDrawer();
                        }}
                        name="plus-circle"
                        size={45}
                        color={colors.textGrey}
                      />
                    </View>
                  </View>
                </View>

                <Text style={{fontSize: 18, marginTop: 15}}>
                  Department of Neorology
                </Text>
                <Text style={{fontSize: 16}}>
                  Gandhi Medical college, Indore
                </Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 35}}>
                  09-12 Oct 2020
                </Text>

                <View
                  style={{
                    paddingBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16}}>Symposium</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      style={{marginHorizontal: 10}}
                      name="heart"
                      size={25}
                      color={colors.Icongrey}
                    />
                    <Icon
                      style={{marginHorizontal: 10}}
                      name="share-variant"
                      size={25}
                      color="#000000"
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        <StatusBar
          backgroundColor={colors.darkOrange}
          barStyle="light-content"
        />
      </View>
    </View>
  );
};

export default Home;

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
