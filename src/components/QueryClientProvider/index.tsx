import NetInfo from '@react-native-community/netinfo';
import {
  focusManager,
  onlineManager,
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from '@tanstack/react-query';
import {useEffect} from 'react';
import {AppState} from 'react-native';

const queryClient = new QueryClient();

export function QueryClientProvider({children}: React.PropsWithChildren) {
  useEffect(() => {
    onlineManager.setEventListener(setOnline =>
      NetInfo.addEventListener(state => setOnline(Boolean(state.isConnected))),
    );
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', status =>
      focusManager.setFocused(status === 'active'),
    );

    return () => subscription.remove();
  }, []);

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
}
