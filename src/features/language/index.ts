import {useTranslation} from 'react-i18next';

export type TranslationFn = ReturnType<typeof useTranslation>['t'];

export {
  supportedLanguages,
  getI18nInstance,
  changeLanguage,
  getCurrentLanguage,
  type SupportedLanguage,
} from './i18next/config';
export {useTranslation, withTranslation, Translation} from 'react-i18next';
export {TranslationProvider} from './components/TranslationProvider';
