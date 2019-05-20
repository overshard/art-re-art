import React from 'react';
import { ScrollView, View } from 'react-native';

import Event from '../components/Event';
import { TitleView } from '../components/Views';


export default class EventsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView
          title="Future and past events"
          description="Shows can happen anytime anywhere! Keep our app installed to get notifications of new events."
        />
        <View style={{ margin: 15 }}>
          <Event
            title="Second Show"
            dateDay="22"
            dateMonth="Oct"
            dateTime="5:30 PM - 7:30 PM"
            locationName="Alpine Mills"
            location="109 E. Fleming Dr."
          />
          <Event
            title="First Show"
            dateDay="13"
            dateMonth="Apr"
            dateTime="5:30 PM - 7:30 PM"
            locationName="Giles Motors"
            location="202 S. Sterling St."
          />
        </View>
      </ScrollView>
    );
  }
}
