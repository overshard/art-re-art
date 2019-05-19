import React from 'react';

import { Text, View } from 'react-native';
import { MapView } from 'expo';


export default class EventsList extends React.Component {
  render() {
    return (
      <View style={{ margin: 15 }}>
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
            <Text style={{ fontWeight: 'bold' }}>Second Show</Text>
            <Text>Date: TBD</Text>
            <Text>Location: TBD</Text>
          </View>
        </View>
        <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ececec', borderWidth: 1, borderColor: '#ececec', borderBottomWidth: 0, shadowColor: '#cccccc', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { width: 0, height: 1 }, backgroundColor: '#ffffff' }}>
          <View style={{ height: 150 }}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: 35.7452778,
                longitude: -81.685,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
                <MapView.Marker
                  title="First Show"
                  description="202 S. Sterling St."
                  coordinate={{
                    latitude: 35.744200,
                    longitude: -81.686850,
                  }}
                />
            </MapView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>First Show</Text>
            <Text>Date: April 13th</Text>
            <Text>Location: 202 S. Sterling St.</Text>
          </View>
        </View>
      </View>
    );
  }
}
