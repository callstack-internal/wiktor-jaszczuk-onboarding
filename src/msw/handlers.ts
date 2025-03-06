import {
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
  OPEN_WEATHER_GEO_ENDPOINT_URI,
} from '@services/openWeather/openWeatherUrls';
import {http, HttpResponse} from 'msw';
import geoEndpointResponse from './responses/geo_response_wro.json';
import weatherEndpointResponse from './responses/weather_response_wro.json';

export const handlers = [
  http.get(OPEN_WEATHER_API_URL + OPEN_WEATHER_GEO_ENDPOINT_URI, () =>
    HttpResponse.json(geoEndpointResponse),
  ),
  http.get(
    OPEN_WEATHER_API_URL + OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
    () => HttpResponse.json(weatherEndpointResponse),
  ),
];
