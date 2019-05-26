import React from "react";
import {
  ScrollView,
  FlatList,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  RefreshControl
} from "react-native";

import { TitleView } from "../components/Views";
import Artist from "../components/Artist";
import fetchArtists from "../utilities/fetchArtists";

export default class ArtistsScreen extends React.Component {
  state = {
    isLoading: true,
    artists: null
  };

  _keyExtractor = (item, index) => item.url;

  _fetchArtists = async () => {
    this.setState({
      isLoading: true,
      artists: null
    });

    return fetch("http://artreart.com/api/artists/")
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          isLoading: false,
          artists: resJson
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    return this._fetchArtists();
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
        source={require("../assets/images/bg1.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this._fetchArtists}
            />
          }
        >
          <TitleView
            title="Artists"
            description="All the artists in Art/Re/Art"
          />
          <FlatList
            style={{ margin: 15 }}
            keyExtractor={this._keyExtractor}
            renderItem={({ item, index }) => (
              <Artist
                {...item}
                index={index}
              />
            )}
            data={this.state.artists}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
