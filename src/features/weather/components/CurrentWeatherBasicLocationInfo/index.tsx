import React from 'react';
import {StyleSheet, Text, View, type ViewProps} from 'react-native';
import type {
  OWLanguage,
  OWMetrics,
} from '../../services/openWeatherApiService/types';
import type {Weather} from '../../hooks/useGetWeatherForLocation';
import {TemperaturePill} from './TemperaturePill';
import {WeatherIcon} from './WeatherIcon';

const ELEMENT_HEIGHT = 60;

export function CurrentWeatherBasicLocationInfo({
  style,
  children,
  weather,
  language,
  unit,
}: ViewProps & {weather: Weather; unit: OWMetrics; language: OWLanguage}) {
  return (
    <View style={[style, styles.container]}>
      <WeatherIcon
        openWeatherIcon={weather.weather[0].icon}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.locationName}>
          {weather.local_names[language] ?? weather.name}
        </Text>
        <Text>{weather.weather[0].description}</Text>
      </View>
      <TemperaturePill
        style={styles.temperature}
        value={weather.main.temp}
        unit={unit}
        height={40}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ELEMENT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {aspectRatio: 1, height: '100%'},
  textContainer: {flex: 1, justifyContent: 'center'},
  locationName: {fontSize: 20},
  temperature: {alignSelf: 'center'},
});
