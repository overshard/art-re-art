import React from 'react';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import ScannerScreen from '../screens/ScannerScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';


const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={25} color={tintColor} />,
    }
  },
  Events: {
    screen: EventsScreen,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-calendar" size={25} color={tintColor} />,
    }
  },
  Scanner: {
    screen: ScannerScreen,
    navigationOptions: {
      tabBarLabel: 'Scanner',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-barcode" size={25} color={tintColor} />,
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-information-circle" size={25} color={tintColor} />,
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-options" size={25} color={tintColor} />,
    }
  },
});


const StackNavigator = createStackNavigator(
  {
    App: {
      screen: BottomTabNavigator,
      navigationOptions: {
        title: 'Art/Re/Art',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: 'white',
        }
      },
    },
  }, {
    headerLayoutPreset: 'center',
  },
);


const AppContainer = createAppContainer(StackNavigator);


export default AppContainer;
