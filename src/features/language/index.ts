import {supportedLngs} from './i18next/config';

export {
  supportedLngs,
  getI18nInstance,
  changeLanguage,
  getCurrentLanguage,
} from './i18next/config';
export {useTranslation} from 'react-i18next';
export {TranslationProvider} from './components/TranslationProvider';

export type SupportedLanguage = (typeof supportedLngs)[number];
