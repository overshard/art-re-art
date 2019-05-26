import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  FlatList
} from "react-native";
import { MapView } from "expo";

import { TitleView } from "../components/Views";
import Artist from "../components/Artist";
import Event from "../components/Event";

export default class EventScreen extends React.Component {
  state = {
    isLoading: true,
    event: null
  };

  _keyExtractor = (item, index) => item.url;

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
          <MapView
            style={{ minHeight: 250 }}
            initialRegion={{
              latitude: this.state.event.location.latitude,
              longitude: this.state.event.location.longitude,
              latitudeDelta: 0.03,
              longitudeDelta: 0.01
            }}
          >
            <MapView.Marker
              title={this.state.event.location.title}
              description={this.state.event.location.street}
              coordinate={{
                latitude: this.state.event.location.latitude,
                longitude: this.state.event.location.longitude
              }}
            />
          </MapView>
          <TitleView title="Event" />
          <View style={{ margin: 15, marginTop: 0 }}>
            <Event {...this.state.event} navigation={this.props.navigation} />
          </View>
          <View>
            <TitleView title="Artists" />
            <FlatList
              style={{ margin: 15, marginTop: 0 }}
              keyExtractor={this._keyExtractor}
              renderItem={({ item, index }) => (
                <Artist
                  {...item}
                  index={index}
                  navigation={this.props.navigation}
                />
              )}
              data={this.state.event.artists}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
