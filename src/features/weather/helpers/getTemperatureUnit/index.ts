import type {OWMetrics} from '../../services/openWeatherApiService/types';

export function getTemperatureUnit(unit: OWMetrics) {
  switch (unit) {
    case 'imperial':
      return '°F';
    case 'metric':
      return '°C';
    case 'standard':
      return 'K';
    default:
      return assertUnreachable(unit);
  }
}

function assertUnreachable(_: never): never {
  throw new Error("Didn't expect to get here");
}
