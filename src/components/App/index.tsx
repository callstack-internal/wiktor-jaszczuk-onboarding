import React from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MSWProvider} from '../../msw';
import {QueryClientProvider} from '../QueryClientProvider';
import {NavigationContainer} from './NavigationContainer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function App() {
  return (
    <MSWProvider>
      <QueryClientProvider>
        <GestureHandlerRootView>
          <SafeAreaProvider style={styles.container}>
            <NavigationContainer
              onReady={() => BootSplash.hide({fade: true})}
            />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </MSWProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
