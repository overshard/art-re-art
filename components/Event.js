import React from 'react';

import { Text, View } from 'react-native';
import { MapView } from 'expo';


export default class Event extends React.Component {
  render() {
    return (
      <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ececec', borderWidth: 1, borderColor: '#ececec', borderBottomWidth: 0, shadowColor: '#cccccc', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { width: 0, height: 1 }, backgroundColor: '#ffffff' }}>
        <View style={{ height: 150 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.props.lat,
              longitude: this.props.lon,
              latitudeDelta: 0.03,
              longitudeDelta: 0.01,
            }}>
              <MapView.Marker
                title={ this.props.title }
                description={ this.props.location }
                coordinate={{
                  latitude: this.props.lat,
                  longitude: this.props.lon,
                }}
              />
          </MapView>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{ this.props.title }</Text>
          <Text>Date: { this.props.date }</Text>
          <Text>Location: { this.props.location }</Text>
        </View>
      </View>
    );
  }
}
