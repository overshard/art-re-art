import React from "react";

import { TouchableOpacity, View, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";

import ScannerScreen from "../screens/ScannerScreen";
import AboutScreen from "../screens/AboutScreen";
import EventScreen from "../screens/EventScreen";
import ArtistScreen from "../screens/ArtistScreen";

import BottomTabNavigator from "./BottomTabNavigator";

const StackNavigatorRouteConfigs = {
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
            onPress={() => navigation.navigate("About")}
            style={{ marginRight: 20 }}
          >
            <AntDesign name="questioncircleo" size={25} color="white" />
          </TouchableOpacity>
        </View>
      )
    })
  },
  Scanner: {
    screen: ScannerScreen
  },
  About: {
    screen: AboutScreen
  },
  Event: {
    screen: EventScreen
  },
  Artist: {
    screen: ArtistScreen
  }
};

const StackNavigatorConfig = {
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
    headerBackImage: <AntDesign name="left" size={25} color="white" />
  }
};

export default (StackNavigator = createStackNavigator(
  StackNavigatorRouteConfigs,
  StackNavigatorConfig
));
