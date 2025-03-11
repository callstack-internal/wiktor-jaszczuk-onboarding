import {type StaticScreenProps, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Content} from '../../../../components/Content';
import {CurrentWeatherBasicLocationInfo} from '../../components/CurrentWeatherBasicLocationInfo';
import {getTemperatureUnit} from '../../helpers/getTemperatureUnit';
import {type Weather} from '../../hooks/useGetWeatherForLocation';
import type {
  OWLanguage,
  OWMetrics,
} from '../../services/openWeatherApiService/types';
import {WeatherDetailEntry} from './WeatherDetailEntry';

export function WeatherLocationDetails({
  route: {
    params: {unit, language, ...weather},
  },
}: StaticScreenProps<Weather & {unit: OWMetrics; language: OWLanguage}>) {
  const navigation = useNavigation();

  const onGoBackPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Content>
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
      <View style={styles.buttonContainer}>
        <Button title="Go back" onPress={onGoBackPressed} />
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {marginTop: 20},
});
