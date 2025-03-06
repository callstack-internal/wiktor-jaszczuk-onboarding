import {App} from '@app/App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Config} from 'react-native-config';

async function enableMocking() {
  if (Config.MOCK_OPEN_WEATHER_API === '1') {
    await import('./src/msw/msw.polyfills');
    const {server} = await import('./src/msw/server');
    server.listen();
  }
}

enableMocking().then(() => {
  AppRegistry.registerComponent(appName, () => App);
});
