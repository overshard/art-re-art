import React from 'react';

import { createBottomTabNavigator, createAppContainer, withOrientation } from 'react-navigation';
import { Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen';


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Events: EventsScreen,
    About: AboutScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        }
        else if (routeName === 'About') {
          iconName = `ios-information-circle`;
        }
        else if (routeName === 'Events') {
          iconName = `ios-calendar`;
        }
        else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'special-elite': require('./assets/SpecialElite.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ padding: 15, backgroundColor: 'black' }}>
          {
            this.state.fontLoaded ? (
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', fontFamily: 'special-elite' }}>
                Art/Re/Art
              </Text>
            ) : null
          }
        </View>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
