import React from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MSWProvider} from '../../msw';
import {QueryClientProvider} from '../QueryClientProvider';
import {NavigationContainer} from './NavigationContainer';

export function App() {
  return (
    <MSWProvider>
      <QueryClientProvider>
        <SafeAreaProvider style={styles.container}>
          <NavigationContainer
            onReady={() => {
              console.log('BootSplash hide!');
              BootSplash.hide({fade: true});
            }}
          />
        </SafeAreaProvider>
      </QueryClientProvider>
    </MSWProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
