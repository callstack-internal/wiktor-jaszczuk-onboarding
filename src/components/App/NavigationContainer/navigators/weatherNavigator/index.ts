import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens as weatherScreens} from '../../../../../features/weather';

export const weatherNavigator = createNativeStackNavigator({
  initialRouteName: 'WeatherLocations',
  screens: {
    WeatherLocations: weatherScreens.WeatherLocations,
    WeatherLocationDetails: weatherScreens.WeatherLocationDetails,
  },
  screenOptions: {
    headerShown: false,
  },
});
