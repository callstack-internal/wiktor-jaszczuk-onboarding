import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function WeatherDetailEntry({
  value,
  name,
  unit,
  isLast,
}: {
  name: string;
  value: number;
  unit: string;
  isLast?: true;
}) {
  return (
    <View style={[styles.container, isLast && styles.noBottomBorder]}>
      <Text>{name}</Text>
      <Text style={styles.value}>{`${value} ${unit}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  value: {opacity: 0.5},
});
