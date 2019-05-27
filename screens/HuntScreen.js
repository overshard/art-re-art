import React from "react";
import { ScrollView, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { TitleView } from "../components/Views";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView
          title="Scavenger Hunt"
          description="Hunts don't unlock till the event starts!"
        />
        <View
          style={{
            flexDirection: "row",
            margin: 15,
            padding: 15,
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 15
          }}
        >
          <View style={{ padding: 15 }}>
            <AntDesign name="plussquareo" size={25} color="red" />
          </View>
          <Text style={{ color: "white", padding: 15 }}>
            What is the largest piece of art at this event?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 15,
            padding: 15,
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 15
          }}
        >
          <View style={{ padding: 15 }}>
            <AntDesign name="checksquare" size={25} color="green" />
          </View>
          <Text style={{ color: "white", padding: 15 }}>
            What is the human first name of who started Art/Re/Art?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 15,
            padding: 15,
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 15
          }}
        >
          <View style={{ padding: 15 }}>
            <AntDesign name="plussquareo" size={25} color="red" />
          </View>
          <Text style={{ color: "white", padding: 15 }}>
            What day of the week was Art/Re/Art's first show?
          </Text>
        </View>
      </ScrollView>
    );
  }
}
