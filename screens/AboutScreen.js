import React from 'react';
import { ScrollView, View } from 'react-native';

import { TitleView } from '../components/Views';


export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView title="About" description="Behind the scenes of Art/Re/Art." />
      </ScrollView>
    );
  }
}
