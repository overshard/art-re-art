import React from "react";
import { StyleSheet, View, Button, Dimensions, Image } from "react-native";
import { Permissions, BarCodeScanner } from "expo";
import parse from "url-parse";

import { TitleView } from "../components/Views";

export default class ScannerScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    let url = parse(data);
    console.log(url);
    if (url.hostname.includes("artreart.com")) {
      let path = url.pathname.split("/");
      if (path[2] === "events") {
        this.props.navigation.navigate("Event", { url: data });
        this.setState({ scanned: false });
      }
      else if (path[2] === "artists") {
        this.props.navigation.navigate("Artist", { url: data });
        this.setState({ scanned: false });
      }
      else {
        this.setState({ scanned: false });
      }
    } else {
      this.setState({ scanned: false });
    }
  };

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
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            position: "absolute",
            zIndex: 3,
            width: Dimensions.get("window").width
          }}
        >
          <TitleView
            title="Scanner"
            description="See a QR code? Give it a scan..."
          />
        </View>

        <Image
          source={require("../assets/images/scan-overlay.png")}
          style={{
            zIndex: 2,
            position: "absolute",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
        />
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  }
}
