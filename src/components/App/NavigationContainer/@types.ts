import {StaticParamList} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootNavigator} from './navigators/rootNavigator';
import {weatherNavigator} from './navigators/weatherNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends StaticParamList<ReturnType<typeof rootNavigator>> {}

    interface WeatherStackParamList
      extends StaticParamList<typeof weatherNavigator> {}

    interface WeatherNavigationProp<
      SCREEN extends keyof ReactNavigation.WeatherStackParamList,
    > extends NativeStackNavigationProp<
        ReactNavigation.WeatherStackParamList,
        SCREEN
      > {}
  }
}
