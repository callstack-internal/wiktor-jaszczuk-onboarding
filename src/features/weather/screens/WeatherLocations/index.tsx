import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import type {ListRenderItemInfo} from '@shopify/flash-list/src/FlashListProps';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Content} from '../../../../components/Content';
import {
  HARDCODED_LANGUAGE,
  HARDCODED_UNIT_TYPE,
} from '../../constants/defaults';
import {WEATHER_LOCATIONS} from '../../constants/weatherLocations';
import {CurrentWeatherLocationListEntry} from './CurrentWeatherLocationListEntry';

export function WeatherLocations() {
  const navigation =
    useNavigation<ReactNavigation.WeatherNavigationProp<'WeatherLocations'>>();

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
    <Content>
      <FlashList
        estimatedItemSize={80}
        data={WEATHER_LOCATIONS}
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
      />
    </Content>
  );
}

function ListSeparator() {
  return <View style={styles.listSeparator} />;
}

const styles = StyleSheet.create({
  listSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
