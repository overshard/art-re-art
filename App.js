import React from "react";

import { View, StatusBar } from "react-native";
import { AppLoading } from "expo";
import { createAppContainer } from "react-navigation";

import cacheAssetsAsync from "./utilities/cacheAssetsAsync";
import StackNavigator from "./navigation/StackNavigator";

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require("./assets/images/art-re-art-logo.png"),
          require("./assets/images/placeholder.jpg")
        ],
        fonts: [
          {
            font2: require("./assets/fonts/Inconsolata.otf")
          }
        ]
      });
    } catch (e) {
      console.warn(
        "There was an error caching assets (see: main.js), perhaps due to a " +
          "network timeout, so we skipped caching. Reload the app to try again."
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <AppContainer />
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}
