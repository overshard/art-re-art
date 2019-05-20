import React from 'react';
import { View, Text } from 'react-native';

import { TitleText } from './Texts';


export class TitleView extends React.Component {
  render() {
      return (
        <View style={{ margin: 15 }}>
          <TitleText style={{ marginBottom: 5 }}>{this.props.title}</TitleText>
          {
              this.props.description ?
              <Text style={{ color: '#555555' }}>{this.props.description}</Text>
              : null
          }
        </View>
      );
  }
}
