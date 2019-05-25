import React from "react";
import { ScrollView } from "react-native";

import { TitleView } from "../components/Views";

export default class FAQScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView
          title="FAQ"
          description="Frequently Asked Questions"
        />
      </ScrollView>
    );
  }
}
