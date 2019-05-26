import React from "react";
import {
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  ImageBackground
} from "react-native";

import Event from "../components/Event";
import { TitleView } from "../components/Views";

export default class EventsScreen extends React.Component {
  state = {
    isLoading: true,
    events: null
  };

  _keyExtractor = (item, index) => item.url;

  _fetchEvents = () => {
    this.setState({
      isLoading: true,
      events: null
    });
    return fetch("http://artreart.com/api/events/")
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          isLoading: false,
          events: resJson
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    return this._fetchEvents();
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
      <ImageBackground source={require("../assets/images/bg5.png")} style={{width: '100%', height: '100%'}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this._fetchEvents}
            />
          }
        >
          <TitleView
            title="Events"
            description="Shows can happen anytime anywhere! Keep our app installed to get notifications of new events."
          />
          <FlatList
            style={{ margin: 15 }}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <Event
                {...item}
                navigation={this.props.navigation}
              />
            )}
            data={this.state.events}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
