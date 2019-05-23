import { AsyncStorage } from 'react-native';
import moment from "moment";

export default async function fetchEvents() {
  _fetchData = async () => {
    let eventsFetch = fetch("http://art-re-art.herokuapp.com/api/events/")
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });

    let eventLocationsFetch = fetch(
      "http://art-re-art.herokuapp.com/api/eventlocations/"
    )
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });

    return Promise.all([eventsFetch, eventLocationsFetch])
      .then(([eventsResponse, eventLocationsResponse]) => {
        let events = eventsResponse.map(event => {
          let datetime = moment(event.datetime);
          event.dateDay = datetime.format("DD");
          event.dateMonth = datetime.format("MMM");
          event.dateTime = datetime.format("h:mm A");
          event.location = eventLocationsResponse.find(location => {
            return event.location === location.url;
          });
          return event;
        });
        return events;
      })
      .catch(err => {
        console.error(err);
      });
  }

  _storeData = async (events) => {
    try {
      await AsyncStorage.setItem('@ArtReArtStore:events', events);
    } catch (err) {
      console.error(err);
    }
  }

  _retrieveData = async () => {
    try {
      let events = await AsyncStorage.getItem('@ArtReArtStore:events');
      if (events !== null) {
        return JSON.parse(events);
      } else {
        events = await _fetchData();
        _storeData(JSON.stringify(events));
        return events;
      }
    } catch (err) {
      console.error(err);
    }
  }

  return _retrieveData();
}
