import {Text} from 'react-native';
import {type Edges, SafeAreaView} from 'react-native-safe-area-context';

export function ProfileScreen() {
  return (
    <SafeAreaView edges={edges}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
}

const edges: Edges = ['top'];
