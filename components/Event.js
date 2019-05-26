import React from "react";
import {
  TouchableHighlight,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class Event extends React.Component {
  _showEvent = () => {
    this.props.navigation.navigate("Event", { url: this.props.event.url });
  };

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this._showEvent()}
          style={{
            marginBottom: 15,
            backgroundColor: "#ffffff",
            borderRadius: 10
          }}
        >
          <View>
            <Image
              source={require("../assets/images/card-bg.png")}
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
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  backgroundColor: "red"
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "red",
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
                    style={{
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      fontFamily: "font2"
                    }}
                  >
                    {this.props.dateMonth}
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 22,
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
                      marginLeft: 20,
                      letterSpacing: 1,
                      fontFamily: "font2"
                    }}
                  >
                    {this.props.dateTime}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "red"
                }}
              >
                <AntDesign
                  name="enviroment"
                  size={20}
                  style={{ color: "black", marginRight: 10, padding: 3 }}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "bold",
                      fontFamily: "font2"
                    }}
                  >
                    {this.props.locationName}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 22,
                      marginLeft: 5,
                      marginRight: 5,
                      fontFamily: "font2"
                    }}
                  >
                    |
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "font2"
                    }}
                  >
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
