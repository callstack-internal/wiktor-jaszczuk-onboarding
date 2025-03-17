import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import {server} from './src/msw';
import {setUpTests} from 'react-native-reanimated';

setUpTests();

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native-localization-settings', () => ({
  createLanguageDetector: jest.fn(() => ({
    type: '3rdParty',
    init: jest.fn(),
  })),
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
