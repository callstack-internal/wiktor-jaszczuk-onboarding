import type {OWMetrics} from '../../services/openWeatherApiService/types';
import {getTemperatureUnit} from './index';

const SPEC: [OWMetrics, string][] = [
  ['standard', 'K'],
  ['imperial', '°F'],
  ['metric', '°C'],
];

describe('getTemperatureUnit', () => {
  it.each(SPEC)(
    'Given unit: %s. Expect return value will be "%s"',
    (unit, expectedValue) => {
      expect(getTemperatureUnit(unit)).toEqual(expectedValue);
    },
  );
});
