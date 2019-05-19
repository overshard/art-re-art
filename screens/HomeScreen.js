import React from 'react';

import { Text, View, Image } from 'react-native';
import Event from '../components/Event';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
          <Image source={require('../assets/art-re-art-logo.png')} style={{width: 300, height: 300}} />
        </View>
        <View style={{ flex: 1, margin: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>
            Next Event
          </Text>
          <Event
            title="Second Show"
            date="TBD"
            location="TBD"
            lat={35.7452778}
            lon={-81.685}
          />
        </View>
      </View>
    );
  }
}
