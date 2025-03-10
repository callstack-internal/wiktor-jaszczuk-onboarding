import {type StaticScreenProps, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {type Edges, SafeAreaView} from 'react-native-safe-area-context';
import {CurrentWeatherBasicLocationInfo} from '../../components/CurrentWeatherBasicLocationInfo';
import {HARDCODED_LANGUAGE} from '../../constants/defaults';
import {getTemperatureUnit} from '../../helpers/getTemperatureUnit';
import type {
  OWLanguage,
  OWMetrics,
} from '../../services/openWeatherApiService/types';
import {type Weather} from '../../hooks/useGetWeatherForLocation';
import {WeatherDetailEntry} from './WeatherDetailEntry';

export function WeatherLocationDetails({
  route: {
    params: {unit, language, ...weather},
  },
}: StaticScreenProps<Weather & {unit: OWMetrics; language: OWLanguage}>) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: weather.local_names[HARDCODED_LANGUAGE] ?? weather.name,
    });
  }, [navigation, weather.local_names, weather.name]);

  return (
    <SafeAreaView edges={safeAreaViewEdges} style={styles.container}>
      <CurrentWeatherBasicLocationInfo
        weather={weather}
        unit={unit}
        language={language}
      />
      <WeatherDetailEntry
        name="Temperature"
        value={weather.main.temp}
        unit={getTemperatureUnit(unit)}
      />
      <WeatherDetailEntry
        name="Feels like"
        value={weather.main.feels_like}
        unit={getTemperatureUnit(unit)}
      />
      <WeatherDetailEntry
        name="Pressure"
        value={weather.main.pressure}
        unit="hPa"
      />
      <WeatherDetailEntry
        name="Wind speed"
        value={weather.wind.speed}
        unit="mph"
      />
      <WeatherDetailEntry
        name="Humidity"
        value={weather.main.humidity}
        unit="%"
      />
      <WeatherDetailEntry
        name="Cloud cover"
        value={weather.clouds.all}
        unit="%"
      />
    </SafeAreaView>
  );
}

const safeAreaViewEdges: Edges = ['bottom'];

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
});
