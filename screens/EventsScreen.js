import React from 'react';
import { Text, View } from 'react-native';

import Event from '../components/Event';
import TitleView from '../components/TitleView';


export default class EventsScreen extends React.Component {
  render() {
    return (
      <View>
        <TitleView
          title="Future and past events"
          description="Shows can happen anytime anywhere! Keep our app installed to get notifications of new events."
        />
        <View style={{ margin: 15 }}>
          <Event
            title="Second Show"
            date="TBD"
            location="TBD"
            lat={35.7452778}
            lon={-81.685}
          />
          <Event
            title="First Show"
            date="April 13th"
            location="202 S. Sterling St."
            lat={35.744200}
            lon={-81.686850}
          />
        </View>
      </View>
    );
  }
}
