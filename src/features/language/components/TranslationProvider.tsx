import {useState} from 'react';
import {useAsyncEffect} from 'use-async-effect';
import {getI18nInstance} from '../i18next/config';

export function TranslationProvider({
  children,
}: React.PropsWithRequiredChildren) {
  const [isInitialized, setIsInitialized] = useState(false);

  useAsyncEffect(async isMounted => {
    await getI18nInstance();
    if (isMounted()) {
      setIsInitialized(true);
    }
  }, []);

  return isInitialized && children;
}
