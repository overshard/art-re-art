import React from "react";
import {
  ScrollView,
  FlatList,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  RefreshControl
} from "react-native";

import { TitleView } from "../components/Views";
import Accordion from "../components/Accordion";
import AboutData from "../data/about.json";

export default class AboutScreen extends React.Component {
  state = {
    isLoading: true,
    about: null,
  };

  _keyExtractor = (item, index) => item.question;

  _fetchAbout = async () => {
    this.setState({
      isLoading: true,
      about: null,
    });

    return fetch("https://www.artreart.com/api/about/")
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          isLoading: false,
          about: resJson[0]
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  _devs = () => {
    return this.state.about.developers
      .map(developers => {
        return developers.name;
      })
      .join(", ");
  };

  _faqs = () => {
    return this.state.about.faqs
      .map(faqs => {
        return faqs.question + " " + faqs.answer;
      })
      .join(", ");
  };

  componentDidMount() {
    return this._fetchAbout();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <ImageBackground
        source={require("../assets/images/bg3.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this._fetchAbout}
            />
          }
        >
          <TitleView
            title={this.state.about.title}
            description={this.state.about.description}
          />
          <View style={{ margin: 15 }}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={{ flex: 1 }}>Website:</Text>
              <Text style={{ flex: 3, fontFamily: "font2" }}>
                {this.state.about.website}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={{ flex: 1 }}>Developers:</Text>
              {this.state.about.developers ? (
                <Text style={{ flex: 3, fontFamily: "font2" }}>
                  {this._devs()}
                </Text>
              ) : null}
            </View>
          </View>
          <TitleView title="FAQ" description="Frequently Asked Questions" />
          <FlatList 
            style={{ margin: 15 }}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
            <Accordion
              title={item.question}
              description={item.answer}
            />
            )}
            data={this.state.about.faqs}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
