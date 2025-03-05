import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {App} from '@app/App';
import ReactNativeBootsplash from 'react-native-bootsplash';

const MOCKED_OW_KEY = 'THIS_IS_SOME_MOCKED_OW_KEY';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('displays mocked open weather key key on the screen', () => {
    expect(screen.getByText(MOCKED_OW_KEY)).toBeOnTheScreen();
  });

  it('has element with testID OW_KEY contains mocked open weather key', () => {
    const textElement = screen.getByTestId('OW_KEY');

    expect(textElement).toBeOnTheScreen();
    expect(textElement).toHaveTextContent(MOCKED_OW_KEY);
  });

  it('it hides bootsplash image on app start', async () => {
    expect(ReactNativeBootsplash.hide).toHaveBeenCalledTimes(1);
  });
});
