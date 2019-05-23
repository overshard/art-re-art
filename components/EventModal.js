import React from "react";
import { Button, View, Text, Modal } from "react-native";
import { MapView } from "expo";
import moment from "moment";

import { TitleView } from "./Views";

export default class EventModal extends React.Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props._modalVisible();
        }}
      >
        <View>
          <MapView
            style={{ minHeight: 250 }}
            initialRegion={{
              latitude: this.props.event.location.latitude,
              longitude: this.props.event.location.longitude,
              latitudeDelta: 0.03,
              longitudeDelta: 0.01
            }}
          >
            <MapView.Marker
              title={this.props.event.location.title}
              description={this.props.event.location.street}
              coordinate={{
                latitude: this.props.event.location.latitude,
                longitude: this.props.event.location.longitude
              }}
            />
          </MapView>
          <View>
            <TitleView
              title={this.props.event.title}
              description={moment(this.props.event.datetime).format()}
            />

            <View style={{ margin: 15 }}>
              <Button
                title="Hide Modal"
                onPress={() => {
                  this.props._modalVisible();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
