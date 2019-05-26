import React from "react";
import { View, Text } from "react-native";

import { TitleText } from "./Texts";

export class TitleView extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 30, marginBottom: 30, marginLeft: 15, marginRight: 15, borderBottomColor: "#CCC", borderBottomWidth: 1, paddingBottom: 10, paddingTop: 10 }}>
        <TitleText style={{ marginBottom: 5, color: "red" }}>{this.props.title}</TitleText>
        {this.props.description ? (
          <Text style={{ color: "#555555", fontFamily: "font2" }}>{this.props.description}</Text>
        ) : null}
      </View>
    );
  }
}
