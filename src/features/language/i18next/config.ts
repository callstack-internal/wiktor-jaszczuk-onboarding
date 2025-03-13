import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import profileEn from './translations/profile.en.json';
import profilePl from './translations/profile.pl.json';
import weatherEn from './translations/weather.en.json';
import weatherPl from './translations/weather.pl.json';
import {createLanguageDetector} from 'react-native-localization-settings';

export const supportedLanguages = ['pl', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number] | 'cimode';

export const resources = {
  en: {profile: profileEn, weather: weatherEn},
  pl: {profile: profilePl, weather: weatherPl},
} as const;

let i18NextInstanceIterator:
  | undefined
  | ReturnType<typeof i18NextInstanceIGenerator>;

export async function getI18nInstance(
  defaultLanguage: SupportedLanguage | undefined = undefined,
) {
  if (i18NextInstanceIterator === undefined) {
    i18NextInstanceIterator = i18NextInstanceIGenerator(defaultLanguage);
  }

  const {value} = await i18NextInstanceIterator.next();
  return value;
}

export async function resetI18nInstance() {
  i18NextInstanceIterator = undefined;
}

export async function changeLanguage(language?: SupportedLanguage) {
  const instance = await getI18nInstance();

  await instance.changeLanguage(language);
}

export async function getCurrentLanguage() {
  const instance = await getI18nInstance();
  return instance.language as unknown as SupportedLanguage;
}

export function parseLanguageCode(language: string) {
  const grouped = /^([a-z]{2})(-[a-zA-Z]{2,3})?$/.exec(language);
  const parsedLanguage = (grouped && grouped[1]) || undefined;
  return isSupportedLanguage(parsedLanguage) ? parsedLanguage : undefined;
}

function isSupportedLanguage(
  languageToTest: string | undefined,
): languageToTest is SupportedLanguage {
  return languageToTest === undefined
    ? false
    : (supportedLanguages as unknown as unknown[]).includes(languageToTest);
}

async function* i18NextInstanceIGenerator(
  defaultLanguage: SupportedLanguage | undefined = undefined,
) {
  const instance = i18next.createInstance();

  const languageDetector = createLanguageDetector({
    async: false,
  });

  await instance
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      nonExplicitSupportedLngs: true,
      lowerCaseLng: true,
      supportedLngs: supportedLanguages,
      fallbackLng: 'en',
      lng: defaultLanguage,
      debug: __DEV__,
      resources,
      saveMissing: false,
      appendNamespaceToCIMode: true,
    } as const);

  while (1) {
    yield instance;
  }
  // eslint-disable-next-line no-unreachable
  return instance;
}
