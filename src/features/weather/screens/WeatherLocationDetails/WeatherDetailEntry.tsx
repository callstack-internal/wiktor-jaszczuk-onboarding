import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function WeatherDetailEntry({
  value,
  name,
  unit,
}: {
  name: string;
  value: number;
  unit: string;
}) {
  return (
    <View style={styles.container}>
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
  value: {opacity: 0.5},
});
