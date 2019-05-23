import React from "react";
import {
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl
} from "react-native";

import Event from "../components/Event";
import { TitleView } from "../components/Views";
import fetchEvents from "../utilities/fetchEvents";

export default class EventsScreen extends React.Component {
  state = {
    isLoading: true,
    dataSource: null
  };

  _keyExtractor = (item, index) => item.url;

  _fetchEvents = async () => {
    this.setState({
      isLoading: true,
      dataSource: null
    });

    let events = await fetchEvents();

    this.setState({
      isLoading: false,
      dataSource: events
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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this._fetchEvents}
          />
        }
      >
        <TitleView
          title="Future and past events"
          description="Shows can happen anytime anywhere! Keep our app installed to get notifications of new events."
        />
        <FlatList
          style={{ margin: 15 }}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <Event
              title={item.title}
              dateDay={item.dateDay}
              dateMonth={item.dateMonth}
              dateTime={item.dateTime}
              locationName={item.location.title}
              location={item.location.street}
              event={item}
            />
          )}
          data={this.state.dataSource}
        />
      </ScrollView>
    );
  }
}
