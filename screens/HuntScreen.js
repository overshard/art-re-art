import React from "react";
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  FlatList
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { TitleView } from "../components/Views";

export default class HuntScreen extends React.Component {
  state = {
    isLoading: true,
    hunt: null
  };

  _keyExtractor = (item, index) => item.question;

  _fetchHunt = () => {
    return (huntFetch = fetch(this.props.navigation.getParam("url"))
      .then(res => res.json())
      .then(resJson => {
        return this.setState({
          hunt: resJson,
          isLoading: false
        });
      })
      .catch(err => {
        console.error(err);
      }));
  };

  componentDidMount() {
    return this._fetchHunt();
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
      <ScrollView>
        <TitleView
          title="Scavenger Hunt"
          description="Find everything, show an organizer, win a prize!"
        />

        <FlatList
          style={{ margin: 15, marginTop: 0 }}
          keyExtractor={this._keyExtractor}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                margin: 15,
                padding: 15,
                backgroundColor: "black",
                alignItems: "center",
                borderRadius: 15
              }}
            >
              <View style={{ padding: 15 }}>
                <AntDesign name="plussquareo" size={25} color="red" />
              </View>
              <Text style={{ color: "white", padding: 15 }}>
                {item.question}
              </Text>
            </View>
          )}
          data={this.state.hunt.items}
        />
      </ScrollView>
    );
  }
}
