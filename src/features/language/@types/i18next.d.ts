import {resources, supportedLngs} from '../i18next/config';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.en;
    supportedLngs: typeof supportedLngs;
  }
}
