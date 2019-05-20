import React from 'react';
import { Text, View } from 'react-native';

import { TitleView } from '../components/Views';


export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleView title="About" description="Behind the scenes of Art/Re/Art." />
      </View>
    );
  }
}
