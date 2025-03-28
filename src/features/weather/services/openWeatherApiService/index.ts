import {Config} from 'react-native-config';
import {
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
  OPEN_WEATHER_GEO_ENDPOINT_URI,
} from './openWeatherUrls';
import type {OWLanguage, OWMetrics} from './types';
import {
  geoEndpointResponseSchema,
  weatherEndpointResponseSchema,
} from './zodSchemas';

export class OpenWeatherApiService {
  private static instance: OpenWeatherApiService | undefined;
  private readonly apiKey: string;

  public static getInstance() {
    if (OpenWeatherApiService.instance === undefined) {
      OpenWeatherApiService.instance = new OpenWeatherApiService(
        Config.OPEN_WEATHER_API_KEY,
      );
    }
    return OpenWeatherApiService.instance;
  }

  private constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async resolveCoordinatesByLocationName({
    locationName,
    countryCode,
  }: ResolveCoordinatesByLocationName) {
    const response = await this.fetchFromOpenWeather(
      OPEN_WEATHER_GEO_ENDPOINT_URI,
      {
        q: [locationName, countryCode].join(','),
        limit: '1',
        appid: this.apiKey,
      },
    );

    const responseCollection = geoEndpointResponseSchema.parse(response);
    if (responseCollection.length === 0) {
      throw Error('Cannot resolve coordinates for given name');
    }
    return responseCollection[0];
  }

  public async getWeatherForLocation({
    latitude,
    longitude,
    language,
    unitTypes,
  }: GetWeatherForLocation) {
    const response = await this.fetchFromOpenWeather(
      OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT_URI,
      {
        lat: latitude.toString(10),
        lon: longitude.toString(10),
        units: unitTypes,
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

type GetWeatherForLocation = {
  latitude: number;
  longitude: number;
  language: OWLanguage;
  unitTypes: OWMetrics;
};

type ResolveCoordinatesByLocationName = {
  locationName: string;
  countryCode: string;
};
