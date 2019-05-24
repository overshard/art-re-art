import React from "react";

import { TouchableOpacity, View, Image } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

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
        <Ionicons name="ios-home" size={25} color={tintColor} />
      )
    }
  },
  Events: {
    screen: EventsScreen,
    navigationOptions: {
      tabBarLabel: "Events",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-calendar" size={25} color={tintColor} />
      )
    }
  },
  Artists: {
    screen: ArtistsScreen,
    navigationOptions: {
      tabBarLabel: "Artists",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-color-palette" size={25} color={tintColor} />
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: "About",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-information-circle" size={25} color={tintColor} />
      )
    }
  }
});

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
              <Ionicons name="ios-barcode" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Settings")}
              style={{ marginRight: 20 }}
            >
              <Ionicons name="ios-options" size={25} color="white" />
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
        <Ionicons name="ios-arrow-back" size={25} color="white" />
      )
    }
  }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
