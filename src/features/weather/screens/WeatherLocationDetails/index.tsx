import {type StaticScreenProps, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Content} from '../../../../components/Content';
import {useTranslation} from '../../../language';
import {CurrentWeatherBasicLocationInfo} from '../../components/CurrentWeatherBasicLocationInfo';
import {getTemperatureUnit} from '../../helpers/getTemperatureUnit';
import {type Weather} from '../../hooks/useGetWeatherForLocation';
import type {OWMetrics} from '../../services/openWeatherApiService/types';
import {WeatherDetailEntry} from './WeatherDetailEntry';

export function WeatherLocationDetails({
  route: {
    params: {unit, ...weather},
  },
}: StaticScreenProps<Weather & {unit: OWMetrics}>) {
  const navigation = useNavigation();
  const {t} = useTranslation('weather');

  const onGoBackPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Content>
      <CurrentWeatherBasicLocationInfo weather={weather} unit={unit} />
      <WeatherDetailEntry
        name={t('metrics.temperature')}
        value={weather.main.temp}
        unit={getTemperatureUnit(unit)}
      />
      <WeatherDetailEntry
        name={t('metrics.feelsLike')}
        value={weather.main.feels_like}
        unit={getTemperatureUnit(unit)}
      />
      <WeatherDetailEntry
        name={t('metrics.pressure')}
        value={weather.main.pressure}
        unit={t('units.hPa')}
      />
      <WeatherDetailEntry
        name={t('metrics.windSpeed')}
        value={weather.wind.speed}
        unit={t('units.mph')}
      />
      <WeatherDetailEntry
        name={t('metrics.humidity')}
        value={weather.main.humidity}
        unit={t('units.percent')}
      />
      <WeatherDetailEntry
        name={t('metrics.cloudCover')}
        value={weather.clouds.all}
        unit={t('units.percent')}
        isLast={true}
      />
      <View style={styles.buttonContainer}>
        <Button title={t('buttons.goBack')} onPress={onGoBackPressed} />
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {marginTop: 20},
});
