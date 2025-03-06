import {
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
  OPEN_WEATHER_GEO_ENDPOINT_URI,
} from '@services/openWeather/openWeatherUrls';
import type {OWLanguage, OWMetrics} from '@services/openWeather/types';
import {
  geoEndpointResponseSchema,
  weatherEndpointResponseSchema,
} from '@services/openWeather/zodSchemas';
import {Config} from 'react-native-config';

export class OpenWeatherService {
  private static instance: OpenWeatherService | undefined;
  private readonly apiKey: string;

  public static getInstance() {
    if (OpenWeatherService.instance === undefined) {
      OpenWeatherService.instance = new OpenWeatherService(
        Config.OPEN_WEATHER_API_KEY,
      );
    }
    return OpenWeatherService.instance;
  }

  private constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async resolveCoordinatesByLocationName(
    locationName: string,
    country: string,
  ) {
    const response = await this.fetchFromOpenWeather(
      OPEN_WEATHER_GEO_ENDPOINT_URI,
      {
        q: [locationName, country].join(','),
        limit: '1',
        appid: this.apiKey,
      },
    );

    return geoEndpointResponseSchema.parse(response);
  }

  public async getWeatherForLocation(
    latitude: number,
    longitude: number,
    language: OWLanguage = 'en',
    unitTypes: OWMetrics = 'metric',
  ) {
    const response = await this.fetchFromOpenWeather(
      OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
      {
        lat: latitude.toString(10),
        lon: longitude.toString(10),
        metrics: unitTypes,
        lang: language,
        appid: this.apiKey,
      },
    );

    return weatherEndpointResponseSchema.parse(response);
  }

  private async fetchFromOpenWeather(
    uri: string,
    params: Record<string, string>,
  ) {
    const url = `${OPEN_WEATHER_API_URL}${uri}?${new URLSearchParams(params)}`;

    const response = await fetch(url, {method: 'get'});

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  }
}
