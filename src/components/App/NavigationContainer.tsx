import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {screens as profileScreens} from '../../features/profile';
import {screens as weatherScreens} from '../../features/weather';

const WeatherStack = createNativeStackNavigator({
  initialRouteName: 'WeatherLocations',
  screens: {
    WeatherLocations: weatherScreens.WeatherLocations,
    WeatherLocationDetails: weatherScreens.WeatherLocationDetails,
  },
  screenOptions: {
    headerShown: false,
  },
});

const RootNavigator = createDrawerNavigator({
  screens: {
    Home: {screen: WeatherStack, options: {title: 'Weather'}},
    Profile: profileScreens.ProfileScreen,
  },
  backBehavior: 'none',
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
