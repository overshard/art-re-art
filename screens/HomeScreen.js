import React from 'react';

import { Text, View, Image } from 'react-native';
import HomeNextEvent from '../components/HomeNextEvent';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
          <Image source={require('../assets/art-re-art-logo.png')} style={{width: 300, height: 300}} />
        </View>
        <HomeNextEvent />
      </View>
    );
  }
}
