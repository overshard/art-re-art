import React from 'react';
import { ScrollView, FlatList } from 'react-native';

import Event from '../components/Event';
import { TitleView } from '../components/Views';
import EventsData from '../data/events.json';

export default class EventsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <TitleView
          title="Future and past events"
          description="Shows can happen anytime anywhere! Keep our app installed to get notifications of new events."
        />
        <FlatList
          style={{ margin: 15 }}
          renderItem={({item}) => <Event {...item} />}
          data={EventsData.events}
        />
      </ScrollView>
    );
  }
}
