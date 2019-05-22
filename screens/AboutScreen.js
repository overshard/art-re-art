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
          <Text>Website: {AboutData.website}</Text>
          <Text>Developers: {AboutData.developers}</Text>
          <Text>Description: {AboutData.description}</Text>
        </View>
      </ScrollView>
    );
  }
}
