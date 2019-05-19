import React from 'react';

import { Text, View } from 'react-native';

import EventsList from '../components/EventsList';


export default class EventsScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15 }}>Future and past events</Text>
          <Text style={{ color: '#555555' }}>Shows can happen anytime anywhere! Keep our app installed to get notifications of new events.</Text>
        </View>
        <EventsList />
      </View>
    );
  }
}
