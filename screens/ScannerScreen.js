import React from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { Permissions, BarCodeScanner } from 'expo';

import { TitleView } from '../components/Views';


export default class ScannerScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return (
        <TitleView
          title="Scanner"
          description="Requesting camera permissions"
        />
      );
    }
    if (hasCameraPermission === false) {
      return (
        <TitleView
          title="Scanner"
          description="Permission denied for your camera :("
        />
      );
    }
    return (
      <View
        style={{
          flex: 1,
        }}>

        <View style={{ flex: 1, backgroundColor: '#ffffff', position: 'absolute', zIndex: 2, width: Dimensions.get('window').width }}>
          <TitleView title="Scanner" description="See a QR code? Give it a scan..." />
        </View>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}