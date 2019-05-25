import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { WebBrowser, LinearGradient } from "expo";
import { AntDesign } from "@expo/vector-icons";

export default class Artist extends React.Component {
  _openInstagram = () => {
    return WebBrowser.openBrowserAsync(this.props.instagram);
  };

  _openWebsite = () => {
    return WebBrowser.openBrowserAsync(this.props.website);
  };

  render() {
    return (
      <LinearGradient
        colors={
          this.props.index % 2 ? ["#F29B7E", "#F074AD"] : ["#8CC9FF", "#568EC9"]
        }
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={{
          padding: 15,
          borderRadius: 5,
          marginBottom: 5,
          flexDirection: "row",
          overflow: "hidden"
        }}
      >
        <Text
          style={{
            position: "absolute",
            fontSize: 80,
            left: 15,
            right: 15,
            opacity: 0.1,
            color: "white",
            fontWeight: "bold"
          }}
        >
          {this.props.name}
        </Text>
        <View style={{ justifyContent: "center", flex: 2 }}>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {this.props.name}
          </Text>
          {this.props.medium ? (
            <Text style={{ color: "white", fontFamily: "font2" }}>{this.props.medium.join(', ')}</Text>
          ) : null}
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          {this.props.instagram ? (
            <TouchableOpacity
              onPress={() => this._openInstagram()}
              style={{ marginRight: 20 }}
            >
              <AntDesign name="instagram" size={25} color="white" />
            </TouchableOpacity>
          ) : null}
          {this.props.website ? (
            <TouchableOpacity
              onPress={() => this._openWebsite()}
              style={{ marginRight: 20 }}
            >
              <AntDesign name="export" size={25} color="white" />
            </TouchableOpacity>
          ) : null}
        </View>
      </LinearGradient>
    );
  }
}
