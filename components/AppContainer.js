import React from "react";

import { TouchableOpacity, View, Image } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import EventsScreen from "../screens/EventsScreen";
import ScannerScreen from "../screens/ScannerScreen";
import AboutScreen from "../screens/AboutScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ArtistsScreen from "../screens/ArtistsScreen";

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="home" size={25} color={tintColor} />
      )
    }
  },
  Events: {
    screen: EventsScreen,
    navigationOptions: {
      tabBarLabel: "Events",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="calendar" size={25} color={tintColor} />
      )
    }
  },
  Artists: {
    screen: ArtistsScreen,
    navigationOptions: {
      tabBarLabel: "Artists",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="team" size={25} color={tintColor} />
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: "About",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="infocirlceo" size={25} color={tintColor} />
      )
    }
  }
},
{tabBarOptions: {
  style: {
    backgroundColor: 'black',
  },
  activeTintColor: 'red',
  inactiveTintColor: 'white',
}});

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: BottomTabNavigator,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Scanner")}
              style={{ marginRight: 20 }}
            >
              <AntDesign name="qrcode" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Settings")}
              style={{ marginRight: 20 }}
            >
              <AntDesign name="Trophy" size={25} color="white" />
            </TouchableOpacity>
          </View>
        )
      })
    },
    Scanner: {
      screen: ScannerScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerTitle: (
        <Image
          source={require("../assets/images/art-re-art-logo.png")}
          style={{
            width: 100,
            height: 100,
            position: "absolute"
          }}
        />
      ),
      headerStyle: {
        backgroundColor: "black"
      },
      headerBackTitleStyle: {
        color: "white"
      },
      headerBackImage: (
        <AntDesign name="left" size={25} color="white" />
      )
    }
  }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
