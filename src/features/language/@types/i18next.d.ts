import {
  resources,
  type SupportedLanguage,
  supportedLanguages,
} from '../i18next/config';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.en;
    supportedLngs: typeof supportedLanguages;
    lng: SupportedLanguage;
  }
}
