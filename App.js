import React from 'react';

import { createBottomTabNavigator, createAppContainer, withOrientation } from 'react-navigation';
import { Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading, Font } from 'expo';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ScannerScreen from './screens/ScannerScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Events: EventsScreen,
    Scanner: ScannerScreen,
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
        else if (routeName === 'Scanner') {
          iconName = `ios-barcode`;
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
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/art-re-art-logo.png'),
          require('./assets/images/placeholder.jpg'),
        ],
        fonts: [
          {
            'special-elite': require('./assets/fonts/SpecialElite.ttf'),
          },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ padding: 15, backgroundColor: 'black' }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
              Art/Re/Art
            </Text>
          </View>
          <AppContainer />
        </SafeAreaView>
      );
    } else {
      return <AppLoading />
    }
  }
}
