import React from 'react';

import { Text, View } from 'react-native';


export default class EventsList extends React.Component {
  render() {
    return (
      <View style={{ margin: 15, borderWidth: 1, borderColor: '#ececec', borderBottomWidth: 0, shadowColor: '#cccccc', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { width: 0, height: 1 }, backgroundColor: '#ffffff' }}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ececec', padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Second Show</Text>
          <Text>Date: TBD</Text>
          <Text>Location: TBD</Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ececec', padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>First Show</Text>
          <Text>Date: April 13th</Text>
          <Text>Location: 202 S. Sterling St.</Text>
        </View>
      </View>
    );
  }
}
