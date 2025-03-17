import React from 'react';
import {Text, TextProps} from 'react-native';
import {useGetCurrentLanguage, useTranslation} from '../../../../language';
import type {Weather} from '../../../hooks/useGetWeatherForLocation';

export function LocationName({
  localNames,
  fallbackName,
  ...props
}: React.PropsWithNoChildren<TextProps> & {
  localNames: Weather['local_names'];
  fallbackName: string;
}) {
  const currentLanguageQuery = useGetCurrentLanguage();
  const {t} = useTranslation('weather');

  let locationName = '';
  if (currentLanguageQuery.isLoading) {
    locationName = t('loading');
  } else if (
    currentLanguageQuery.isSuccess &&
    currentLanguageQuery.data !== undefined
  ) {
    locationName = localNames[currentLanguageQuery.data] ?? fallbackName;
  } else {
    locationName = fallbackName;
  }

  return <Text {...props}>{locationName}</Text>;
}
