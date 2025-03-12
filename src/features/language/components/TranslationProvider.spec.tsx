import {render, screen, waitFor} from '@testing-library/react-native';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {TranslationProvider} from './TranslationProvider';

describe('TranslationProvider', () => {
  it('the component is initialized after a while', async () => {
    render(
      <TranslationProvider defaultLanguage="cimode">
        <TestComponent />
      </TranslationProvider>,
    );
    return await waitFor(() =>
      expect(screen.getByTestId('testText')).toHaveTextContent(
        'profile:label.selectLanguage',
      ),
    );
  });
});

function TestComponent() {
  const {t} = useTranslation('profile');

  return <Text testID="testText">{t('label.selectLanguage')}</Text>;
}
