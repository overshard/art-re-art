import React from "react";
import { View, Text, Button } from "react-native";
import { WebBrowser } from "expo";

export default class Artist extends React.Component {
  _openInstagram = () => {
    return WebBrowser.openBrowserAsync(this.props.instagram);
  };

  _openWebsite = () => {
    return WebBrowser.openBrowserAsync(this.props.website);
  };

  render() {
    return (
      <View
        style={{
          marginBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: "black",
          paddingBottom: 15
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{this.props.name}</Text>
        {this.props.medium ? (
          <Text style={{ marginBottom: 15 }}>Medium: {this.props.medium}</Text>
        ) : null}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {this.props.instagram ? (
            <Button title="Instagram" onPress={this._openInstagram} />
          ) : null}
          {this.props.website ? (
            <Button title="Website" onPress={this._openWebsite} />
          ) : null}
        </View>
      </View>
    );
  }
}
