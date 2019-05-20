import React from 'react';
import { Text, View } from 'react-native';

import { TitleView } from '../components/Views';


export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleView title="Settings" description="Configure notifications and other options" />
      </View>
    );
  }
}
