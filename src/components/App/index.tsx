import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TranslationProvider} from '../../features/language';
import {MSWProvider} from '../../msw';
import {QueryClientProvider} from '../QueryClientProvider';
import {NavigationContainer} from './NavigationContainer';

export function App() {
  const hideBootsplash = useCallback(() => BootSplash.hide({fade: true}), []);

  return (
    <MSWProvider>
      <TranslationProvider>
        <QueryClientProvider>
          <GestureHandlerRootView>
            <SafeAreaProvider style={styles.container}>
              <NavigationContainer onReady={hideBootsplash} />
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
