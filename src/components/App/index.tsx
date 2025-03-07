import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {QueryClientProvider} from '../QueryClientProvider';
import {useGetWeatherForLocation} from '../../features/weather';
import {MSWProvider} from '../../msw';
import {useCloseBootsplashOnMount} from './useCloseBootsplashOnMount';

export function App() {
  useCloseBootsplashOnMount();

  return (
    <MSWProvider>
      <QueryClientProvider>
        <SafeAreaProvider style={styles.container}>
          <SafeAreaView>
            <Text>Weather</Text>
            <CurrentWeather locationName="Wrocław" locationCountryCode="pl" />
          </SafeAreaView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </MSWProvider>
  );
}

interface CurrentWeatherProps {
  locationName: string;
  locationCountryCode: string;
}

function CurrentWeather({
  locationName,
  locationCountryCode,
}: CurrentWeatherProps) {
  const {data, isError, isLoading, ...queryData} = useGetWeatherForLocation(
    locationName,
    locationCountryCode,
  );

  if (isError) {
    return <Text>Error: {queryData.error?.message}</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
