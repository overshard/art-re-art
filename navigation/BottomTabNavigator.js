import React from "react";

import { createBottomTabNavigator } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import EventsScreen from "../screens/EventsScreen";
import ArtistsScreen from "../screens/ArtistsScreen";

const BottomTabNavigatorRouteConfigs = {
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
  }
};

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    style: {
      backgroundColor: "black",
      paddingTop: 10
    },
    activeTintColor: "red",
    inactiveTintColor: "white",
    labelStyle: {
      fontSize: 10
    }
  }
};

export default (BottomTabNavigator = createBottomTabNavigator(
  BottomTabNavigatorRouteConfigs,
  BottomTabNavigatorConfig
));
