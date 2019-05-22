import React from "react";
import { Dimensions, ScrollView, View, Image } from "react-native";

import Event from "../components/Event";
import { TitleText } from "../components/Texts";

import EventsData from "../data/events.json";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 15
          }}
        >
          <Image
            source={require("../assets/images/art-re-art-logo.png")}
            style={{
              width: Dimensions.get("window").width - 25,
              height: Dimensions.get("window").width - 25
            }}
          />
        </View>
        <View
          style={{
            margin: 15
          }}
        >
          <TitleText
            style={{
              marginBottom: 5
            }}
          >
            Next Event
          </TitleText>
          <Event {...EventsData.events[0]} />
        </View>
      </ScrollView>
    );
  }
}
