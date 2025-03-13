import {StaticParamList} from '@react-navigation/native';
import {rootNavigator} from './navigators/rootNavigator';
import {weatherNavigator} from './navigators/weatherNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
