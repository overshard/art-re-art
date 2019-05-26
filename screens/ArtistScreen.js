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

export default class ArtistScreen extends React.Component {
  state = {
    isLoading: true,
    artist: null
  };

  _keyExtractor = (item, index) => item.url;

  _fetchArtist = () => {
    return (artistFetch = fetch(this.props.navigation.getParam("url"))
      .then(res => res.json())
      .then(resJson => {
        return this.setState({
          artist: resJson,
          isLoading: false
        });
      })
      .catch(err => {
        console.error(err);
      }));
  };

  componentDidMount() {
    return this._fetchArtist();
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
          <TitleView title="Artist" />
          <View style={{ margin: 15, marginTop: 0 }}>
            <Text>{this.state.artist.name}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
