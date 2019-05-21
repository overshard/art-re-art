import React from 'react';
import { View, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import moment from 'moment';

import Event from '../components/Event';
import { TitleView } from '../components/Views';

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount(){
    return fetch('http://art-re-art.herokuapp.com/api/events/')
      .then((response) => response.json())
      .then((events) => {
        fetch('http://art-re-art.herokuapp.com/api/eventlocations/')
          .then((response) => response.json())
          .then((eventLocations) => {
            let completeEvents = events.map(event => {
              let datetime = moment(event.datetime);
              event.dateDay = datetime.format('DD');
              event.dateMonth = datetime.format('MMM');
              event.dateTime = datetime.format('h:mm A');
              event.location = eventLocations.find(location => {
                return event.location === location.url;
              });
              return event;
            });
            this.setState({
              isLoading: false,
              dataSource: completeEvents,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _keyExtractor = (item, index) => item.url;

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <ScrollView>
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
