import React from 'react';
import Registration1 from "../screens/auth/Registration1";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Registration2 from '../screens/auth/Registration2';
import Registration3 from '../screens/auth/Registration3';
import Registration4 from '../screens/auth/Registration4';
import Home from '../screens/main/home';


import {DrawerContent  } from "./drawerContent";
import { createDrawerNavigator } from 'react-navigation-drawer';
import favoriteEvents from '../screens/main/favoriteEvents';
import Updates from '../screens/main/Updates';
import ConferenceProfile from '../screens/main/ConferenceProfile';
import ErollConference from '../screens/main/ErollConference';
import ErollConference2 from '../screens/main/ErollConference2';
import PaperSubmit from '../screens/main/PaperSubmit';
import ReviewSubmission from '../screens/main/ReviewSubmission';
import PaymentGateway from '../screens/main/PaymentGateway';
import PaymentConfirmation from '../screens/main/PaymentConfirmation';
import SplashScreen from '../screens/auth/splash';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
    initialRouteName='Homee'
    drawerContent ={props=><DrawerContent {...props}/>}>
      <Stack.Screen name="Homee" component={Home} />
      <Stack.Screen name="Favorites" component={favoriteEvents} />
        <Stack.Screen name="Updates" component={Updates} />
        <Stack.Screen name="ConferenceProfile" component={ConferenceProfile} />

    </Drawer.Navigator>
  );
}



function App() {
  //let Username = await AsyncStorage.getItem(storage.Username);
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Splash" headerMode='none'>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Registration1" component={Registration1} />
        <Stack.Screen name="Registration2" component={Registration2} />
        <Stack.Screen name="Registration3" component={Registration3} />
        <Stack.Screen name="Registration4" component={Registration4} />

        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="ErollConference" component={ErollConference} />
        <Stack.Screen name="ErollConference2" component={ErollConference2} />
        <Stack.Screen name="PaperSubmit" component={PaperSubmit} />
        <Stack.Screen name="ReviewSubmission" component={ReviewSubmission} />
        <Stack.Screen name="PaymentGateway" component={PaymentGateway} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;