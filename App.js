import React from 'react';

import { createBottomTabNavigator, createAppContainer, withOrientation } from 'react-navigation';
import { Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ArtistsScreen from './screens/ArtistsScreen';
import CuriosScreen from './screens/CuriosScreen';
import AboutScreen from './screens/AboutScreen';


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Events: EventsScreen,
    Artists: ArtistsScreen,
    Curios: CuriosScreen,
    About: AboutScreen,
  },
);


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ padding: 20, backgroundColor: 'black' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Art/Re/Art</Text>
        </View>
        <AppContainer />
      </View>
    );
  }
}