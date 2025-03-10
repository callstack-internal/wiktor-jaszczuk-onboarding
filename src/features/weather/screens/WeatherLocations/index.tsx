import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import type {ListRenderItemInfo} from '@shopify/flash-list/src/FlashListProps';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {type Edges, SafeAreaView} from 'react-native-safe-area-context';
import {
  HARDCODED_LANGUAGE,
  HARDCODED_UNIT_TYPE,
} from '../../constants/defaults';
import {WEATHER_LOCATIONS} from '../../constants/weatherLocations';
import {CurrentWeatherLocationListEntry} from './CurrentWeatherLocationListEntry';

export function WeatherLocations() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        ReactNavigation.RootParamList,
        'WeatherLocations'
      >
    >();

  const renderItem = useCallback(
    ({
      item: {name, countryCode},
    }: ListRenderItemInfo<(typeof WEATHER_LOCATIONS)[number]>) => (
      <CurrentWeatherLocationListEntry
        locationName={name}
        locationCountryCode={countryCode}
        language={HARDCODED_LANGUAGE}
        unit={HARDCODED_UNIT_TYPE}
        onPress={weather => {
          navigation.push('WeatherLocationDetails', {
            ...weather,
            unit: HARDCODED_UNIT_TYPE,
            language: HARDCODED_LANGUAGE,
          });
        }}
      />
    ),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container} edges={safeAreaViewEdges}>
      <FlashList
        estimatedItemSize={80}
        data={WEATHER_LOCATIONS}
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
      />
    </SafeAreaView>
  );
}

const safeAreaViewEdges: Edges = ['bottom'];

function ListSeparator() {
  return <View style={styles.listSeparator} />;
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  listSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
