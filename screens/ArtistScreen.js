import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  Button,
  Image,
  Dimensions
} from "react-native";
import { WebBrowser } from "expo";

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

  _openInstagram = () => {
    return WebBrowser.openBrowserAsync(this.state.artist.instagram);
  };

  _openWebsite = () => {
    return WebBrowser.openBrowserAsync(this.state.artist.website);
  };

  _medium = () => {
    return this.state.artist.medium
      .map(medium => {
        return medium.title;
      })
      .join(", ");
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
          <ScrollView
            horizontal={true}
            snapToInterval={Dimensions.get("window").width}
            showsHorizontalScrollIndicator={false}
          >
            <Image
              source={require("../assets/images/placeholder.jpg")}
              style={{
                width: Dimensions.get("window").width,
                height: 300
              }}
            />
            <Image
              source={require("../assets/images/placeholder.jpg")}
              style={{
                width: Dimensions.get("window").width,
                height: 300
              }}
            />
            <Image
              source={require("../assets/images/placeholder.jpg")}
              style={{
                width: Dimensions.get("window").width,
                height: 300
              }}
            />
          </ScrollView>
          <TitleView title="Artist" />
          <View style={{ margin: 15, marginTop: 0 }}>
            <Text>Name: {this.state.artist.name}</Text>
            <Button title="Website" onPress={this._openWebsite} />
            <Button title="Instagram" onPress={this._openInstagram} />
            <Text>Medium: {this._medium()}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
