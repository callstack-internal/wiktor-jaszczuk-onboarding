import {render} from '@testing-library/react-native';
import type {Weather} from '../../hooks/useGetWeatherForLocation';
import type {OWMetrics} from '../../services/openWeatherApiService/types';
import {CurrentWeatherBasicLocationInfo} from './index';

const METRICS: OWMetrics[] = ['metric', 'imperial', 'standard'];

describe('CurrentWeatherBasicLocationInfo', () => {
  it.each(METRICS)('Given UnitType: %s, then it will match snapshot', unit => {
    expect(
      render(
        <CurrentWeatherBasicLocationInfo weather={WEATHER_MOCK} unit={unit} />,
      ),
    ).toMatchSnapshot();
  });
});

const WEATHER_MOCK: Weather = {
  clouds: {
    all: 0,
  },
  coord: {
    lat: 51.11,
    lon: 17.03,
  },
  dt: 1741185257,
  main: {
    feels_like: 15.48,
    grnd_level: 1008,
    humidity: 23,
    pressure: 1024,
    sea_level: 1024,
    temp: 17.11,
    temp_max: 17.21,
    temp_min: 16.69,
  },
  sys: {
    country: 'PL',
    sunrise: 1741152487,
    sunset: 1741192736,
  },
  timezone: 3600,
  visibility: 10000,
  weather: [
    {
      description: 'clear sky',
      icon: '01d',
      id: 800,
      main: 'Clear',
    },
  ],
  wind: {
    deg: 270,
    speed: 2.57,
  },
  local_names: {
    ar: 'فروتزواف',
    be: 'Уроцлаў',
    bg: 'Вроцлав',
    cs: 'Vratislav',
    de: 'Breslau',
    en: 'Wrocław',
    eo: 'Vroclavo',
    es: 'Breslavia',
    fr: 'Vratislavie',
    he: 'ורוצלב',
    hu: 'Boroszló',
    it: 'Breslavia',
    ja: 'ヴロツワフ',
    la: 'Wratislavia',
    lt: 'Vroclavas',
    lv: 'Vroclava',
    mk: 'Вроцлав',
    pl: 'Wrocław',
    pt: 'Breslávia',
    ru: 'Вроцлав',
    sk: 'Vroclav',
    sr: 'Вроцлав',
    uk: 'Вроцлав',
    yi: 'ברעסלוי',
    zh: '弗罗茨瓦夫',
  },
  name: 'Wrocław',
  country: 'PL',
  state: 'Lower Silesian Voivodeship',
};
