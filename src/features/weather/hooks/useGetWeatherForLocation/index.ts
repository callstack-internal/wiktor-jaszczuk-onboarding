import {useQuery} from '@tanstack/react-query';
import {useGetCurrentLanguage} from '../../../language';
import {WEATHER_QUERY_STALE_TIME_MS} from '../../constants/defaults';
import {OpenWeatherApiService} from '../../services/openWeatherApiService';
import type {
  OWLanguage,
  OWMetrics,
} from '../../services/openWeatherApiService/types';

export function useGetWeatherForLocation({
  locationName,
  locationCountryCode,
  unitTypes,
}: {
  locationName: string;
  locationCountryCode: string;
  unitTypes: OWMetrics;
}) {
  const {data: currentLanguage} = useGetCurrentLanguage();
  return useQuery({
    queryKey: [
      'getWeatherForLocation',
      locationName,
      locationCountryCode,
      currentLanguage,
      unitTypes,
    ],
    queryFn: async () =>
      await getWeatherForLocation(
        locationName,
        locationCountryCode,
        currentLanguage,
        unitTypes,
      ),
    staleTime: WEATHER_QUERY_STALE_TIME_MS,
    enabled: currentLanguage !== undefined,
  });
}

async function getWeatherForLocation(
  locationName: string,
  countryCode: string,
  language: OWLanguage | undefined,
  unitTypes: OWMetrics,
) {
  if (language === undefined) {
    return Promise.reject('getWeatherForLocation, undefined language');
  }

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
