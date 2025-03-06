import {useCloseBootsplashOnMount} from '@hooks/useCloseBootsplashOnMount';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Config} from 'react-native-config';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export function App() {
  useCloseBootsplashOnMount();

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text testID="OW_KEY">{Config.OPEN_WEATHER_API_KEY}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
