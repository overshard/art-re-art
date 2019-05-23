import React from "react";
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
  Text
} from "react-native";
import moment from "moment";

import Event from "../components/Event";
import { TitleText } from "../components/Texts";

export default class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    dataSource: null
  };

  _fetchEvents = () => {
    this.setState({
      isLoading: true,
      dataSource: null
    });
    let eventsFetch = fetch("http://art-re-art.herokuapp.com/api/events/")
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });
    let eventLocationsFetch = fetch(
      "http://art-re-art.herokuapp.com/api/eventlocations/"
    )
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });
    return Promise.all([eventsFetch, eventLocationsFetch])
      .then(([eventsResponse, eventLocationsResponse]) => {
        let events = eventsResponse.map(event => {
          let datetime = moment(event.datetime);
          event.dateDay = datetime.format("DD");
          event.dateMonth = datetime.format("MMM");
          event.dateTime = datetime.format("h:mm A");
          event.location = eventLocationsResponse.find(location => {
            return event.location === location.url;
          });
          return event;
        });
        console.log()
        this.setState({
          isLoading: false,
          dataSource: events
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
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 15
          }}
        >
          <Image
            source={require("../assets/images/art-re-art-logo.png")}
            style={{
              width: Dimensions.get("window").width - 25,
              height: Dimensions.get("window").width - 25
            }}
          />
        </View>
        <View
          style={{
            margin: 15
          }}
        >
          <TitleText
            style={{
              marginBottom: 5
            }}
          >
            Next Event
          </TitleText>
          <Event
            title={this.state.dataSource[0].title}
            dateDay={this.state.dataSource[0].dateDay}
            dateMonth={this.state.dataSource[0].dateMonth}
            dateTime={this.state.dataSource[0].dateTime}
            locationName={this.state.dataSource[0].location.title}
            location={this.state.dataSource[0].location.street}
          />
        </View>
      </ScrollView>
    );
  }
}
