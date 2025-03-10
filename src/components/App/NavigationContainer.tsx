import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../../features/weather';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'WeatherLocations',
  screens: {
    WeatherLocations: {
      screen: screens.WeatherLocations,
      options: {
        title: 'Locations',
      },
    },
    WeatherLocationDetails: screens.WeatherLocationDetails,
  },
});

export const NavigationContainer = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
