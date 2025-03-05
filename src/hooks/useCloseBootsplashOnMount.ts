import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';

export function useCloseBootsplashOnMount() {
  useEffect(() => {
    (async () => {
      await BootSplash.hide({fade: true});
    })();
  }, []);
}
