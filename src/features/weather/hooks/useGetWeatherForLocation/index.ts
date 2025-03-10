import {useQuery} from '@tanstack/react-query';
import {WEATHER_QUERY_STALE_TIME_MS} from '../../constants/defaults';
import {OpenWeatherApiService} from '../../services/openWeatherApiService';
import type {
  OWLanguage,
  OWMetrics,
} from '../../services/openWeatherApiService/types';

export function useGetWeatherForLocation({
  locationName,
  locationCountryCode,
  language,
  unitTypes,
}: {
  locationName: string;
  locationCountryCode: string;
  language: OWLanguage;
  unitTypes: OWMetrics;
}) {
  return useQuery({
    queryKey: [
      'getWeatherForLocation',
      locationName,
      locationCountryCode,
      language,
      unitTypes,
    ],
    queryFn: async () =>
      await getWeatherForLocation(
        locationName,
        locationCountryCode,
        language,
        unitTypes,
      ),
    staleTime: WEATHER_QUERY_STALE_TIME_MS,
  });
}

async function getWeatherForLocation(
  locationName: string,
  countryCode: string,
  language: OWLanguage,
  unitTypes: OWMetrics,
) {
  const {
    lat: latitude,
    lon: longitude,
    local_names,
    name,
    country,
    state,
  } = await OpenWeatherApiService.getInstance().resolveCoordinatesByLocationName(
    {
      locationName,
      countryCode,
    },
  );

  const weatherData =
    await OpenWeatherApiService.getInstance().getWeatherForLocation({
      latitude,
      longitude,
      language,
      unitTypes,
    });

  return {local_names, name, country, state, ...weatherData};
}

export type Weather = Awaited<ReturnType<typeof getWeatherForLocation>>;
