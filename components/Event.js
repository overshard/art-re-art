import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Event extends React.Component {
  render() {
    return (
      <View style={styles.eventView}>
        <Image
          source={require('../assets/images/placeholder.jpg')}
          style={{ resizeMode: 'cover', width: Dimensions.get('window').width-30, height: 300, borderRadius: 10 }}
        />
        <View style={{ padding: 25, position: 'absolute', bottom: 0 }}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ alignItems: 'center', backgroundColor: '#ffffff', opacity: .7, borderRadius: 10, padding: 10 }}>
              <Text style={{ fontWeight: 'bold', letterSpacing: 3, fontSize: 16 }}>{this.props.dateDay}</Text>
              <Text style={{ letterSpacing: 2, textTransform: 'uppercase' }}>{this.props.dateMonth}</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, textTransform: 'uppercase', color: 'white', marginLeft: 15, letterSpacing: 1 }}>{this.props.title}</Text>
              <Text style={{ fontSize: 14, textTransform: 'uppercase', color: 'white', marginLeft: 15, letterSpacing: 1 }}>{this.props.dateTime}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="ios-car" size={25} style={{ color: '#ffffff', marginRight: 10 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>{this.props.locationName}</Text>
              <Text style={{ color: '#ffffff', fontSize: 22, marginLeft: 5, marginRight: 5 }}>|</Text>
              <Text style={{ color: '#ffffff', fontSize: 14 }}>{this.props.location}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  eventView: {
    marginBottom: 15,
    shadowColor: '#000000',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});
