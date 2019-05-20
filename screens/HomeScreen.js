import React from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image } from 'react-native';

import Event from '../components/Event';
import { TitleText } from '../components/Texts';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.logoView}>
          <Image
            source={require('../assets/art-re-art-logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.nextEventView}>
          <TitleText style={styles.nextEventTitle}>
            Next Event
          </TitleText>
          <Event
            title="Second Show"
            dateDay="13"
            dateMonth="APR"
            dateTime="12:00 PM - 5:30 PM"
            locationName="Giles Motors"
            location="202 S. Sterling St."
          />
        </View>
      </ScrollView>
    );
  }
}


// Logo is currently the same width and height
const logoDimensions = Dimensions.get('window').width - 25;


const styles = StyleSheet.create({
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  logoImage: {
    width: logoDimensions,
    height: logoDimensions,
  },
  nextEventView: {
    margin: 15,
  },
  nextEventTitle: {
    marginBottom: 5,
  },
});
