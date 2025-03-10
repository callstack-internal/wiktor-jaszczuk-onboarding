import React, {useState} from 'react';
import {Config} from 'react-native-config';
import {useAsyncEffect} from 'use-async-effect';

export function MSWProvider({children}: React.PropsWithChildren) {
  const [isInitialized, setIsInitialized] = useState(false);

  useAsyncEffect(async isMounted => {
    await enableMocking();
    if (isMounted()) {
      setIsInitialized(true);
    }
  }, []);

  return isInitialized ? <>{children}</> : null;
}

async function enableMocking() {
  if (Config.MOCK_OPEN_WEATHER_API !== '1') {
    return;
  }

  await import('./msw.polyfills');
  const {server} = await import('./server');
  server.listen();
}
