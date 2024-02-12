import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//Import the screens here
import GettingStarted from '../screens/SignUpScreen/GettingStarted';
import SignInScreen from '../screens/SignUpScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/SignUpScreen/ForgotPasswordScreen';
import BottomNavigation from './BottomNavigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import DiscoverScreen from '../screens/DiscoverScreen/DiscoverScreen';
import ChatBotScreen from '../screens/ChatBotScreen/ChatBotScreen';
//import NextScreen from '../screens/SignUpScreen/NextScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GettingStarted" component={GettingStarted} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="Main"
        component={BottomNavigation}
        options={{headerShown: false}}
      />

      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
      <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default AppNavigator;