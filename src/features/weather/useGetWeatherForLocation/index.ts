import {useQuery} from '@tanstack/react-query';
import {OpenWeatherApiService} from '../openWeatherApiService';
import type {OWLanguage, OWMetrics} from '../openWeatherApiService/types';

export function useGetWeatherForLocation(
  locationName: string,
  locationCountryCode: string,
  language: OWLanguage = 'en',
  unitTypes: OWMetrics = 'metric',
) {
  return useQuery({
    queryKey: [
      'getWeatherForLocation',
      locationName,
      locationCountryCode,
      language,
      unitTypes,
    ],
    queryFn: () =>
      getWeatherForLocation(
        locationName,
        locationCountryCode,
        language,
        unitTypes,
      ),
    staleTime: 10 * 60 * 1000,
  });
}

async function getWeatherForLocation(
  locationName: string,
  locationCountryCode: string,
  language: OWLanguage,
  unitTypes: OWMetrics,
) {
  const {lat, lon, local_names, name, country, state} =
    await OpenWeatherApiService.getInstance().resolveCoordinatesByLocationName(
      locationName,
      locationCountryCode,
    );

  const weatherData =
    await OpenWeatherApiService.getInstance().getWeatherForLocation(
      lat,
      lon,
      language,
      unitTypes,
    );

  return {local_names, name, country, state, ...weatherData};
}
