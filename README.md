# Art/Re/Art Mobile

Companion app for a series of pop up art events in downtown Morganton, NC.

## Getting started

Make sure you have xcode and node installed both at the latest. Run xcode
atleast once to make sure it's fully installed.

    npm i -g expo-cli
    git clone https://github.com/art-re-art/art-re-art-mobile.git
    cd art-re-art-mobile
    npm i
    npm start

## Functionality

- QR Code Scanner
- Events Directory
- Artists Directory
- Art Work Directory
- About Art/Re/Art
- Settings to configure notifications, signup for things?
- Event goer gallery for people to take images and upload on the spot
- Scavenger hunt

## Documentation

- Expo SDK: https://docs.expo.io/versions/v32.0.0/sdk/overview/
- React Native: https://facebook.github.io/react-native/docs/getting-started
- Navigation: https://reactnavigation.org/docs/
- Icons: https://expo.github.io/vector-icons/

## On release

- For Android deploys we need to setup Google Maps mobile API key: https://docs.expo.io/versions/v32.0.0/sdk/map-view/

## Running emulator on Windows

    emulator.exe -avd Pixel_3_API_28 -dns-server 8.8.8.8 &

## Events

-event list
  -event block with date, time, location, title
-event pages
  -artists participating
  -schedule if there is one (performances? maybe hold off on this until we have more info)
  -features (i.e. scavenger hunt to win tshirt, etc.)
  -share - (email or text calendar, add to iOS calendar, add to Google Calendar)
  -get notified (day of event send notification)

## Home

-during "off-season" just have info about next upcomnig event with share/notification options and a feed for the instagram posts?
-day of event have all the ways to explore or participate in event in block format
  -see artwork
  -participating artists - click to see list
  -participate in scavenger hunt
  -photo gallery

## Scavenger Hunt

-list of tasks to be copleted or found
  -modal pops up when you click on one with an input field to type in an answer OR upload a photo
  -if correct return to list view but that item is now checked off
  -if incorrect gives error message
-on last item being checked modal pops up with message and image of my face saying go show your screen to this person

## FAQ

-icon in top right when not trophy for scavenger hunt during event (other FAQ is linked on About page)
-add link/button at end to contact
