import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class Accordion extends React.Component {
  state = {
    hidden: true,
  }

  _onPress = () => {
    this.setState({
      hidden: !this.state.hidden,
    })
  }
 render() {
    return (
      <View style={{ marginBottom: 30 }}>
        <TouchableOpacity
          onPress={this._onPress}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 5 }}>
            {this.state.hidden ? "+" : "-"} {this.props.title}
          </Text>
        </TouchableOpacity>
        {!this.state.hidden ?
          <Text style={{ fontFamily: "font2", fontSize: 15 }}>
            {this.props.description}
          </Text> : null }
      </View>
    );
  }
}
