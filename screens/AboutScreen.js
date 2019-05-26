import React from "react";
import { ScrollView, View, Text, ImageBackground } from "react-native";

import { TitleView } from "../components/Views";
import AboutData from "../data/about.json";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require("../assets/images/bg3.png")} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <TitleView
            title="About"
            description="Behind the scenes of Art/Re/Art."
          />
          <View style={{ margin: 15 }}>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={{ flex: 1 }}>Website:</Text>
              <Text style={{ flex: 3, fontFamily: "font2" }}>{AboutData.website}</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={{ flex: 1 }}>Dvelopers:</Text>
              <Text style={{ flex: 3, fontFamily: "font2" }}>{AboutData.developers}</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={{ flex: 1 }}>Description:</Text>
              <Text style={{ flex: 3, fontFamily: "font2" }}>{AboutData.description}</Text>
            </View>
          </View>
          <TitleView title="FAQ" description="Frequently Asked Questions" />
          <View style={{ margin: 15 }}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 25, marginBottom: 5 }}
              >
                What is ART/RE/ART?
              </Text>
              <Text style={{ fontFamily: "font2", fontSize: 15 }}>
                ART/RE/ART is a series of pop-up art shows taking place in and
                around Morganton, NC.
              </Text>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 25, marginBottom: 5 }}
              >
                Where do the shows take place?
              </Text>
              <Text style={{ fontFamily: "font2", fontSize: 15 }}>
                ART/RE/ART changes venue with each show. Check out our Events
                tab to learn more.
              </Text>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 25, marginBottom: 5 }}
              >
                How can I participate in the show?
              </Text>
              <Text style={{ fontFamily: "font2", fontSize: 15 }}>
                Sign up on our website for email updates and follow us on
                Instagram to stay tuned about calls for submissions. We also can
                always use help from volunteers, email us at
                artreart.morganton@gmail.com if you're interested in
                volunteering.
              </Text>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 25, marginBottom: 5 }}
              >
                Where can I learn more?
              </Text>
              <Text style={{ fontFamily: "font2", fontSize: 15 }}>
                Visit our website, www.artreart.com, or email us
                artreart.morganton@gmail.com.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
