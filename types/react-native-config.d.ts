declare module 'react-native-config' {
  export interface NativeConfig {
    OPEN_WEATHER_API_KEY: string;
    MOCK_OPEN_WEATHER_API: '0' | '1';
  }

  export const Config: NativeConfig;
}
