import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {screens as weatherScreens} from '../../features/weather';
import {screens as profileScreens} from '../../features/profile';

const WeatherStack = createNativeStackNavigator({
  initialRouteName: 'WeatherLocations',
  screens: {
    WeatherLocations: {
      screen: weatherScreens.WeatherLocations,
      options: {
        title: 'Locations',
      },
    },
    WeatherLocationDetails: weatherScreens.WeatherLocationDetails,
  },
});

const RootNavigator = createDrawerNavigator({
  screens: {
    Home: WeatherStack,
    Profile: profileScreens.ProfileScreen,
  },
});

export const NavigationContainer = createStaticNavigation(RootNavigator);

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StaticParamList<typeof RootNavigator> {}

    interface WeatherStackParamList
      extends StaticParamList<typeof WeatherStack> {}

    interface WeatherNavigationProp<
      SCREEN extends keyof ReactNavigation.WeatherStackParamList,
    > extends NativeStackNavigationProp<
        ReactNavigation.WeatherStackParamList,
        SCREEN
      > {}
  }
}
