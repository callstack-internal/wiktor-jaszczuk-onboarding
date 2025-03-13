import {createDrawerNavigator} from '@react-navigation/drawer';
import type {TranslationFn} from '../../../../../features/language';
import {screens as profileScreens} from '../../../../../features/profile';
import {weatherNavigator} from '../weatherNavigator';

export const rootNavigator = (t: TranslationFn) =>
  createDrawerNavigator({
    screens: {
      Home: {
        screen: weatherNavigator,
        options: {title: t('weather:stackTitle')},
      },
      Profile: {
        screen: profileScreens.ProfileScreen,
        options: {title: t('profile:stackTitle')},
      },
    },
    backBehavior: 'none',
  });
