import React from "react";
import { View, Text } from "react-native";

export default class Accordion extends React.Component {
  render() {
    return (
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 5 }}>
          {this.props.title}
        </Text>
        <Text style={{ fontFamily: "font2", fontSize: 15 }}>
          {this.props.description}
        </Text>
      </View>
    );
  }
}
