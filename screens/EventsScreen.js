import React from 'react';
import { View, ScrollView, FlatList, ActivityIndicator, Text, RefreshControl } from 'react-native';
import moment from 'moment';

import Event from '../components/Event';
import { TitleView } from '../components/Views';


export default class EventsScreen extends React.Component {
  state = {
    isLoading: true,
    dataSource: null,
  }

  _keyExtractor = (item, index) => item.url;

  _fetchEvents = () => {
    this.setState({
      isLoading: true,
      dataSource: null,
    });
    let eventsFetch = fetch('http://art-re-art.herokuapp.com/api/events/')
      .then((res) => {return res.json()})
      .catch((err) => {console.error(err)});
    let eventLocationsFetch = fetch('http://art-re-art.herokuapp.com/api/eventlocations/')
      .then((res) => {return res.json()})
      .catch((err) => {console.error(err)});
    return Promise.all([eventsFetch, eventLocationsFetch])
      .then(([eventsResponse, eventLocationsResponse]) => {
        let events = eventsResponse.map(event => {
          let datetime = moment(event.datetime);
          event.dateDay = datetime.format('DD');
          event.dateMonth = datetime.format('MMM');
          event.dateTime = datetime.format('h:mm A');
          event.location = eventLocationsResponse.find(location => {
            return event.location === location.url;
          });
          return event;
        });
        this.setState({
          isLoading: false,
          dataSource: events,
        });
      })
      .catch((err) => {console.error(err);});
  }

  componentDidMount() {
    return this._fetchEvents();
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this._fetchEvents}
          />
        }>
        <TitleView
          title="Future and past events"
          description="Shows can happen anytime anywhere! Keep our app installed to get notifications of new events."
        />
        <FlatList
          style={{ margin: 15 }}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Event
            title={item.title}
            dateDay={item.dateDay}
            dateMonth={item.dateMonth}
            dateTime={item.dateTime}
            locationName={item.location.title}
            location={item.location.street}
          />}
          data={this.state.dataSource}
        />
      </ScrollView>
    );
  }
}
