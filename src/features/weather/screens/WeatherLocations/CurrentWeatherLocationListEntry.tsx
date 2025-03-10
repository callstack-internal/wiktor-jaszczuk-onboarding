import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import type {
  OWLanguage,
  OWMetrics,
} from '../../services/openWeatherApiService/types';
import {
  useGetWeatherForLocation,
  type Weather,
} from '../../hooks/useGetWeatherForLocation';
import {PressableCurrentWeatherBasicLocationInfo} from './PressableCurrentWeatherBasicLocationInfo';

interface CurrentWeatherLocationListEntryProps {
  locationName: string;
  locationCountryCode: string;
  unit: OWMetrics;
  language: OWLanguage;
  onPress: (weather: Weather) => void;
}

export function CurrentWeatherLocationListEntry({
  locationName,
  locationCountryCode,
  unit,
  onPress,
  language,
}: CurrentWeatherLocationListEntryProps) {
  const query = useGetWeatherForLocation({
    locationName,
    locationCountryCode,
    language,
    unitTypes: unit,
  });

  return (
    <View style={styles.listItemContainer}>
      {query.isError && <Text>Error: {query.error.message}</Text>}
      {query.isLoading && <ActivityIndicator />}
      {query.isSuccess && (
        <PressableCurrentWeatherBasicLocationInfo
          weather={query.data}
          unit={unit}
          language={language}
          onPress={onPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {flex: 1, paddingVertical: 10},
});
