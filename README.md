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

## Documentation

- Expo SDK: https://docs.expo.io/versions/v32.0.0/sdk/overview/
- React Native: https://facebook.github.io/react-native/docs/getting-started
- Navigation: https://reactnavigation.org/docs/
- Icons: https://expo.github.io/vector-icons/

## On release

- For Android deploys we need to setup Google Maps mobile API key: https://docs.expo.io/versions/v32.0.0/sdk/map-view/

## Running emulator on Windows

    emulator.exe -avd Pixel_3_API_28 -dns-server 8.8.8.8 &
