import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { WebBrowser, LinearGradient } from "expo";
import { AntDesign } from "@expo/vector-icons";

export default class Artist extends React.Component {
  _showArtist = () => {
    this.props.navigation.navigate("Artist", { url: this.props.url });
  };

  _openInstagram = () => {
    return WebBrowser.openBrowserAsync(this.props.instagram);
  };

  _openWebsite = () => {
    return WebBrowser.openBrowserAsync(this.props.website);
  };

  _medium = () => {
    return this.props.medium
      .map(medium => {
        return medium.title;
      })
      .join(", ");
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

        <TouchableHighlight
          onPress={() => this._showArtist()}
          style={{ justifyContent: "center", flex: 2 }}
        >
          <View>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              {this.props.name}
            </Text>
            {this.props.medium ? (
              <Text style={{ color: "white", fontFamily: "font2" }}>
                {this._medium()}
              </Text>
            ) : null}
          </View>
        </TouchableHighlight>
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
