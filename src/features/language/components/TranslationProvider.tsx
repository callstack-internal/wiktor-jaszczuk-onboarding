import type {i18n} from 'i18next';
import {useState} from 'react';
import {I18nextProvider} from 'react-i18next';
import {useAsyncEffect} from 'use-async-effect';
import {getI18nInstance, type SupportedLanguage} from '../i18next';

export function TranslationProvider({
  children,
  defaultLanguage,
}: React.PropsWithRequiredChildren<{defaultLanguage?: SupportedLanguage}>) {
  const [i18Next, setI18Next] = useState<i18n | undefined>(undefined);

  useAsyncEffect(async isMounted => {
    const instance = await getI18nInstance(defaultLanguage);
    if (isMounted()) {
      setI18Next(instance);
    }
  }, []);

  return (
    i18Next !== undefined && (
      <I18nextProvider i18n={i18Next}>{children}</I18nextProvider>
    )
  );
}
