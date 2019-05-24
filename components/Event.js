import React from "react";
import {
  TouchableHighlight,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import EventModal from "./EventModal";

export default class Event extends React.Component {
  state = {
    modalVisible: false
  };

  _modalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  render() {
    return (
      <View>
        <EventModal
          modalVisible={this.state.modalVisible}
          _modalVisible={this._modalVisible}
          event={this.props.event}
        />
        <TouchableHighlight
          onPress={() => this._modalVisible()}
          style={{
            marginBottom: 15,
            backgroundColor: "#ffffff",
            borderRadius: 10
          }}
        >
          <View>
            <Image
              source={require("../assets/images/placeholder.jpg")}
              style={{
                resizeMode: "cover",
                width: Dimensions.get("window").width - 30,
                height: 200,
                borderRadius: 10
              }}
            />
            <View
              style={{
                padding: 25,
                position: "absolute",
                bottom: 0
              }}
            >
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    opacity: 0.7,
                    borderRadius: 10,
                    padding: 10
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      letterSpacing: 3,
                      fontSize: 16
                    }}
                  >
                    {this.props.dateDay}
                  </Text>
                  <Text
                    style={{ letterSpacing: 2, textTransform: "uppercase" }}
                  >
                    {this.props.dateMonth}
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      textTransform: "uppercase",
                      color: "white",
                      marginLeft: 15,
                      letterSpacing: 1
                    }}
                  >
                    {this.props.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      textTransform: "uppercase",
                      color: "white",
                      marginLeft: 15,
                      letterSpacing: 1
                    }}
                  >
                    {this.props.dateTime}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="ios-car"
                  size={25}
                  style={{ color: "#ffffff", marginRight: 10 }}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "bold"
                    }}
                  >
                    {this.props.locationName}
                  </Text>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 22,
                      marginLeft: 5,
                      marginRight: 5
                    }}
                  >
                    |
                  </Text>
                  <Text style={{ color: "#ffffff", fontSize: 14 }}>
                    {this.props.location}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
