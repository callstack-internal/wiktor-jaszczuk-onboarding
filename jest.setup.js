import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import {server} from './src/msw';

import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('react-native-bootsplash', () => {
  const BOOTSPLASH_MOCK = {
    hide: jest.fn(() => {
      console.log('call hide');
      return Promise.resolve();
    }),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: {source: 0},
      brand: {source: 0},
    }),
  };

  return BOOTSPLASH_MOCK;
});

jest.mock('react-native-config', () => {
  return {
    Config: {
      OPEN_WEATHER_API_KEY: 'THIS_IS_SOME_MOCKED_OW_KEY',
      MOCK_OPEN_WEATHER_API: '0',
    },
  };
});
