import React from 'react';
import { ScrollView } from 'react-native';

import { TitleView } from '../components/Views';


export default class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView title="Settings" description="Configure notifications and other options" />
      </ScrollView>
    );
  }
}
