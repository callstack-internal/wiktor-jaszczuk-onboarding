import React from 'react';
import {StyleSheet, Text, View, type ViewProps} from 'react-native';
import {getTemperatureUnit} from '../../helpers/getTemperatureUnit';
import type {OWMetrics} from '../../services/openWeatherApiService/types';

interface TemperaturePillProps extends React.PropsWithNoChildren<ViewProps> {
  value: number;
  height: number;
  unit: OWMetrics;
}

export function TemperaturePill({
  value,
  height,
  style,
  unit,
  ...props
}: TemperaturePillProps) {
  const padding = 10;
  return (
    <View
      {...props}
      style={[
        style,
        styles.container,
        {
          padding,
          height,
          borderRadius: height / 2,
        },
      ]}>
      <Text
        adjustsFontSizeToFit={true}
        style={{
          fontSize: height - 2 * padding,
          lineHeight: height - 2 * padding,
        }}>
        {value.toFixed(1)}
        {getTemperatureUnit(unit)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 2.5,
  },
});
