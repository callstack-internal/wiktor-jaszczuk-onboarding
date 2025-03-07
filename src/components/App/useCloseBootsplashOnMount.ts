import BootSplash from 'react-native-bootsplash';
import {useAsyncEffect} from 'use-async-effect';

export function useCloseBootsplashOnMount() {
  useAsyncEffect(async () => {
    await BootSplash.hide({fade: true});
  }, []);
}
