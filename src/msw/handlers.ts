import {http, HttpResponse} from 'msw';

import {
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
  OPEN_WEATHER_GEO_ENDPOINT_URI,
} from '../features/weather/services/openWeatherApiService/openWeatherUrls';

import geoEndpointResponse from './responses/geo_response_wro.json';
import weatherEndpointResponse from './responses/weather_response_wro.json';

const geoHandler = http.get(
  OPEN_WEATHER_API_URL + OPEN_WEATHER_GEO_ENDPOINT_URI,
  () => HttpResponse.json(geoEndpointResponse),
);

const weatherHandler = http.get(
  OPEN_WEATHER_API_URL + OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
  () => HttpResponse.json(weatherEndpointResponse),
);

export const handlers = [geoHandler, weatherHandler];
