import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import {server} from './src/msw/server';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
