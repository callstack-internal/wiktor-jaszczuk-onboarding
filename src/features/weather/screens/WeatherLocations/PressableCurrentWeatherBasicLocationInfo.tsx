import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {CurrentWeatherBasicLocationInfo} from '../../components/CurrentWeatherBasicLocationInfo';
import type {
  OWLanguage,
  OWMetrics,
} from '../../services/openWeatherApiService/types';
import type {Weather} from '../../hooks/useGetWeatherForLocation';

export function PressableCurrentWeatherBasicLocationInfo({
  weather,
  onPress,
  unit,
  language,
}: {
  weather: Weather;
  unit: OWMetrics;
  language: OWLanguage;
  onPress: (weather: Weather) => void;
}) {
  const onWeatherPress = useCallback(() => {
    onPress(weather);
  }, [onPress, weather]);

  return (
    <Pressable onPress={onWeatherPress}>
      <CurrentWeatherBasicLocationInfo
        weather={weather}
        unit={unit}
        language={language}>
        <Text adjustsFontSizeToFit={true} style={styles.chevron}>
          ›
        </Text>
      </CurrentWeatherBasicLocationInfo>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  chevron: {
    marginLeft: 10,
    fontSize: 80,
    alignSelf: 'center',
  },
});
