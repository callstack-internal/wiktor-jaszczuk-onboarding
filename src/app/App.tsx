import {useCloseBootsplashOnMount} from '@hooks/useCloseBootsplashOnMount';
import React from 'react';
import {Text} from 'react-native';
import Config from 'react-native-config';

export function App() {
  useCloseBootsplashOnMount();

  return <Text testID="OW_KEY">{Config.OPEN_WEATHER_API_KEY}</Text>;
}
