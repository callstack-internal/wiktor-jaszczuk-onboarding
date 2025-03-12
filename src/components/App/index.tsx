import React from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TranslationProvider} from '../../features/language';
import {MSWProvider} from '../../msw';
import {QueryClientProvider} from '../QueryClientProvider';
import {NavigationContainer} from './NavigationContainer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function App() {
  return (
    <MSWProvider>
      <TranslationProvider>
        <QueryClientProvider>
          <GestureHandlerRootView>
            <SafeAreaProvider style={styles.container}>
              <NavigationContainer
                onReady={() => BootSplash.hide({fade: true})}
              />
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </TranslationProvider>
    </MSWProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
