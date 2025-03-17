import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {
  useGetWeatherForLocation,
  type Weather,
} from '../../hooks/useGetWeatherForLocation';
import type {OWMetrics} from '../../services/openWeatherApiService/types';
import {PressableCurrentWeatherBasicLocationInfo} from './PressableCurrentWeatherBasicLocationInfo';

interface CurrentWeatherLocationListEntryProps {
  locationName: string;
  locationCountryCode: string;
  unit: OWMetrics;
  onPress: (weather: Weather) => void;
}

export function CurrentWeatherLocationListEntry({
  locationName,
  locationCountryCode,
  unit,
  onPress,
}: CurrentWeatherLocationListEntryProps) {
  const query = useGetWeatherForLocation({
    locationName,
    locationCountryCode,
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
          onPress={onPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {flex: 1, paddingVertical: 10},
});
