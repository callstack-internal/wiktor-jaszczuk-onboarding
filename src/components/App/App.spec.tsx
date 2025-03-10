import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import ReactNativeBootsplash from 'react-native-bootsplash';

import {App} from './index';

describe('App', () => {
  it('it hides bootsplash image on app start', async () => {
    render(<App />);
    console.log(ReactNativeBootsplash.hide);
    return await waitFor(() => {
      console.log(ReactNativeBootsplash.hide);
      return (
        expect(ReactNativeBootsplash.hide).toHaveBeenCalledTimes(1),
        {timeout: 15000, interval: 100}
      );
    });
  });
});
