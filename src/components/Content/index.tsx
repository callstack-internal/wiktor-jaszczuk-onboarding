import React from 'react';
import {StyleSheet} from 'react-native';
import {type Edges, SafeAreaView} from 'react-native-safe-area-context';

export function Content({children}: React.PropsWithRequiredChildren) {
  return (
    <SafeAreaView style={styles.container} edges={safeAreaViewEdges}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
});

const safeAreaViewEdges: Edges = ['bottom'];
