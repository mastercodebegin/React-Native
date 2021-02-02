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
const ConferenceProfile = () => {
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
      
      <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
        <View
          style={{
            marginTop: 15,
            paddingVertical: 10,
            borderBottomWidth: 0.5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 80,
                width: 80,
                tintColor: colors.Icongrey,
                alignContent: 'center',
                backgroundColor: colors.Icongrey,
                borderRadius: 200,
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  tintColor: colors.grey,
                }}
                //source={require('../../../assets/icons/profile.png')}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 25, textAlign: 'left'}}>Collision</Text>
                <Icon name="share-variant" size={25} color="#000000" />
              </View>
              <Text style={{fontSize: 14, textAlign: 'left'}}>
                a tech Conference
              </Text>
              <View
                style={{
                  marginTop: 10,
                  paddingBottom: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  9-12 Oct 2020
                </Text>
                <Text style={{fontSize: 14, marginLeft: 20}}>
                  Enarcare center,Torronto
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{borderBottomWidth: 0.5, paddingVertical: 10}}>
          <Text style={{fontSize: 18}}> About</Text>
          <Text style={{fontSize: 14}}>
            Collision from Home is “America's fastest growing tech conference”
            created by the team behind Web Summit, 23-25 June 2020. Join 450+
            speakers for over 100 ...
            <Text style={{color: 'blue'}}>more</Text>
          </Text>
        </View>
        <View style={{borderBottomWidth: 0.5, paddingVertical: 10}}>
          <Text style={{fontSize: 18,fontWeight:'500'}}>{'Theme'}</Text>

          <FlatList
            data={intrest}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{paddingHorizontal: 10}}>
                <Text style={{fontSize: 14,fontWeight:'500'}}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 18}}>{'Keynote Speakers'}</Text>

          <FlatList
            style={{height: 300}}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  paddingVertical: 10,
                  borderBottomWidth: 0.5,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      height: 75,
                      width: 75,
                      tintColor: colors.Icongrey,
                      alignContent: 'center',
                      backgroundColor: colors.Icongrey,
                      borderRadius: 200,
                    }}>
                    <Image
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        tintColor: colors.grey,
                      }}
                      //source={require('../../../assets/icons/profile.png')}
                    />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 18, textAlign: 'left'}}>
                        Tedros Adhanom Ghebreyesus
                      </Text>
                    </View>
                    <Text style={{fontSize: 14, textAlign: 'left'}}>
                      Director
                    </Text>

                    <Text style={{fontSize: 14, textAlign: 'left'}}>
                      World Health Organization
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            alignSelf: 'flex-end',
            marginTop: 10,
          }}>
          <Icon name="heart" size={25} color="#000000" />
          <Icon name="share-variant" size={25} color="#000000" />
        </View>
        <CustomButton1
          onPress={() => {
            navigation.navigate('ErollConference');
          }}
          style={{
            width: '40%',
            alignSelf: 'center',
            marginTop: 35,
            marginBottom: 50,
          }}
          textStyle={{color:colors.white}}
          title="ENROLL"
        />
      </ScrollView>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
};

export default ConferenceProfile;

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
