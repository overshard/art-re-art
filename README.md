# Art/Re/Art Mobile

Companion app for a series of pop up art events in downtown Morganton, NC.

## Getting started

Make sure you have xcode and node installed both at the latest. Run xcode
atleast once to make sure it's fully installed.

    git clone https://github.com/art-re-art/art-re-art-mobile.git
    cd art-re-art-mobile
    npm i -g expo-cli
    npm i
    npm start

## Documentation

- Expo SDK: https://docs.expo.io/versions/latest/sdk/overview/
- React Native: https://facebook.github.io/react-native/docs/getting-started
- Navigation: https://reactnavigation.org/docs/
- Icons: https://expo.github.io/vector-icons/

## Windows android emulator

    emulator.exe -avd Pixel_3_API_28 -dns-server 8.8.8.8 &

## Port forwarding for VS Code remote

You'll want to forward port `19002` for the web interface. If using remotely
you'll also want to just use the "tunnel" option for connecting to the dev
app via your phone.
