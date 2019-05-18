import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ArtistsScreen from './screens/ArtistsScreen';
import CuriosScreen from './screens/CuriosScreen';
import AboutScreen from './screens/AboutScreen';


const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Events: EventsScreen,
  Artists: ArtistsScreen,
  Curios: CuriosScreen,
  About: AboutScreen,
});


export default createAppContainer(TabNavigator);