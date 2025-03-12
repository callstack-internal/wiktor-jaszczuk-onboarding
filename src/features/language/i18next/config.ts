import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import profileEn from './translations/profile.en.json';
import profilePl from './translations/profile.pl.json';
import weatherEn from './translations/weather.en.json';
import weatherPl from './translations/weather.pl.json';

export const supportedLngs = ['pl', 'en'] as const;

export const resources = {
  en: {profile: profileEn, weather: weatherEn},
  pl: {profile: profilePl, weather: weatherPl},
} as const;

let instance: ReturnType<typeof initI18Next> | undefined;

export async function getI18nInstance() {
  if (instance === undefined) {
    instance = initI18Next();
  }
  return await instance;
}

export async function changeLanguage(
  language?: (typeof supportedLngs)[number],
) {
  instance = i18next.changeLanguage(language);
  await instance;
}

export function getCurrentLanguage() {
  return i18next.language;
}

function initI18Next() {
  return i18next.use(initReactI18next).init({
    supportedLngs,
    fallbackLng: 'en',
    lng: 'pl',
    debug: __DEV__,
    resources,
  });
}
