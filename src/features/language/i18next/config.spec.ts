import {
  changeLanguage,
  getCurrentLanguage,
  getI18nInstance,
  resetI18nInstance,
  supportedLanguages,
} from './config';

describe('i18next config', () => {
  afterEach(() => {
    resetI18nInstance();
  });

  it('getI18nInstance will return the same instance', async () => {
    const instance = await getI18nInstance();
    const instance2 = await getI18nInstance();

    expect(instance).toEqual(instance2);
  });

  it('getI18nInstance will return translation function', async () => {
    const instance = await getI18nInstance('cimode');

    expect(instance.t('profile:label.selectedLanguage')).toEqual(
      'profile:label.selectedLanguage',
    );
  });

  describe('supported languages', () => {
    it.each(['pl', 'en'])('%s is in suppoerted languages list', language => {
      expect(supportedLanguages).toContain(language);
    });

    it('cimode is not in supported languages list', () => {
      expect(supportedLanguages).not.toContain('cimode');
    });
  });

  it('changeLanguage will change saved language', async () => {
    await getI18nInstance('en');
    const languageBeforeTest = await getCurrentLanguage();
    await changeLanguage('cimode');

    expect(languageBeforeTest).toEqual('en');
    expect(await getCurrentLanguage()).toEqual('cimode');
  });
});
