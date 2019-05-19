import React from 'react';

import { Text, View } from 'react-native';
import { MapView } from 'expo';


export default class HomeNextEvent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, margin: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Upcoming</Text>
        <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ececec', borderWidth: 1, borderColor: '#ececec', borderBottomWidth: 0, shadowColor: '#cccccc', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { width: 0, height: 1 }, backgroundColor: '#ffffff' }}>
          <View style={{ height: 150 }}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: 35.7452778,
                longitude: -81.685,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Next Show</Text>
            <Text>Date: October 5th, 2019</Text>
            <Text>Location: 202 S. Sterling St., Morganton, NC 28655</Text>
          </View>
        </View>
      </View>
    );
  }
}
