import React from "react";
import { ScrollView } from "react-native";

import { TitleView } from "../components/Views";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView
          title="Scavenger Hunt"
          description="Hunts don't unlock till the event starts!"
        />
      </ScrollView>
    );
  }
}
