import React from "react";
import { ScrollView, FlatList, Text, View, ImageBackground } from "react-native";

import { TitleView } from "../components/Views";
import Artist from "../components/Artist";
import ArtistsData from "../data/artists.json";

export default class AboutScreen extends React.Component {
  _keyExtractor = (item, index) => item.name;

  render() {
    return (
      <ImageBackground source={require("../assets/images/bg2.png")} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <TitleView
            title="Artists"
            description="All the artists in Art/Re/Art"
          />
          <FlatList
            style={{ margin: 15 }}
            keyExtractor={this._keyExtractor}
            renderItem={({ item, index }) => (
              <Artist
                index={index}
                name={item.name}
                instagram={item.instagram}
                website={item.website}
                medium={item.medium}
              />
            )}
            data={ArtistsData.artists}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
