import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import { MapView } from "expo";

import { TitleView } from "../components/Views";
export default class EventScreen extends React.Component {
  state = {
    isLoading: true,
    event: null
  };

  _fetchEvent = () => {
    return (eventFetch = fetch(this.props.navigation.getParam("url"))
      .then(res => res.json())
      .then(resJson => {
        return this.setState({
          event: resJson,
          isLoading: false
        });
      })
      .catch(err => {
        console.error(err);
      }));
  };

  componentDidMount() {
    return this._fetchEvent();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <ImageBackground
        source={require("../assets/images/bg2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          {/* <MapView
            style={{ minHeight: 250 }}
            initialRegion={{
              latitude: this.props.event.location.latitude,
              longitude: this.props.event.location.longitude,
              latitudeDelta: 0.03,
              longitudeDelta: 0.01
            }}
          >
            <MapView.Marker
              title={this.props.event.location.title}
              description={this.props.event.location.street}
              coordinate={{
                latitude: this.props.event.location.latitude,
                longitude: this.props.event.location.longitude
              }}
            />
          </MapView> */}
          <View>
            <TitleView title={this.state.event.title} />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
