import React from 'react';
import {Image, type ImageProps} from 'react-native';

interface WeatherIconProps extends Omit<ImageProps, 'source'> {
  openWeatherIcon: string;
}

export function WeatherIcon({openWeatherIcon, ...props}: WeatherIconProps) {
  return (
    <Image
      {...props}
      source={{
        uri: `https://openweathermap.org/img/wn/${openWeatherIcon}@2x.png`,
      }}
    />
  );
}
