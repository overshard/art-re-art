import React from 'react';
import { Text } from 'react-native';


export default class TitleText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontSize: 24, fontWeight: 'bold', fontFamily: 'special-elite' }]} />;
  }
}
