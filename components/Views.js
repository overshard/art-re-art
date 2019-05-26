import React from "react";
import { View, Text, Animated } from "react-native";

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

export class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
