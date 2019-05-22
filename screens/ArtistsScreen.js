import React from "react";
import { ScrollView, FlatList, Text, View } from "react-native";

import { TitleView } from "../components/Views";
import ArtistsData from "../data/artists.json";

export default class AboutScreen extends React.Component {
  _keyExtractor = (item, index) => item.name;

  render() {
    return (
      <ScrollView>
        <TitleView
          title="Artists"
          description="All the artists in Art/Re/Art"
        />
        <FlatList
          style={{ margin: 15 }}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <View>
              <Text>Artist Name: {item.name}</Text>
            </View>
          )}
          data={ArtistsData.artists}
        />
      </ScrollView>
    );
  }
}
