import React from 'react';

import { createBottomTabNavigator, createAppContainer, withOrientation } from 'react-navigation';
import { Text, View, SafeAreaView } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import AboutScreen from './screens/AboutScreen';


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Events: EventsScreen,
    About: AboutScreen,
  },
);


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ padding: 20, backgroundColor: 'black' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Art/Re/Art</Text>
        </View>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
