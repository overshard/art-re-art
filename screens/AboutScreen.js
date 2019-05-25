import React from "react";
import { ScrollView, View, Text } from "react-native";

import { TitleView } from "../components/Views";
import AboutData from "../data/about.json";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView
          title="About"
          description="Behind the scenes of Art/Re/Art."
        />
        <View style={{ margin: 15 }}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>Website:</Text>
            <Text style={{ flex: 3, fontFamily: "font2" }}>{AboutData.website}</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>Dvelopers:</Text>
            <Text style={{ flex: 3, fontFamily: "font2" }}>{AboutData.developers}</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>Description:</Text>
            <Text style={{ flex: 3, fontFamily: "font2" }}>{AboutData.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
