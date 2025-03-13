import {useCallback, useMemo, useState} from 'react';
import {Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useAsyncEffect} from 'use-async-effect';
import {Content} from '../../../../components/Content';
import {
  changeLanguage,
  getCurrentLanguage,
  type SupportedLanguage,
  supportedLanguages,
  useTranslation,
} from '../../../language';

export function ProfileScreen() {
  const {t} = useTranslation('profile');
  const [language, setLanguage] = useState<undefined | SupportedLanguage>(
    undefined,
  );

  useAsyncEffect(async isMounted => {
    const currentLanguage = await getCurrentLanguage();
    if (isMounted()) {
      setLanguage(currentLanguage);
    }
  }, []);

  const onLanguageSelectionChanged = useCallback(
    (item: (typeof dropdownItems)[number]) => changeLanguage(item.value),
    [],
  );

  const dropdownItems: {label: string; value: SupportedLanguage}[] = useMemo(
    () =>
      supportedLanguages.map(supportedLanguage => ({
        label: t(`languageSelector.${supportedLanguage}`),
        value: supportedLanguage,
      })),
    [t],
  );

  return (
    <Content>
      {language !== undefined && (
        <>
          <Text>{t('label.selectLanguage')}</Text>
          <Dropdown
            value={language}
            data={dropdownItems}
            labelField="label"
            valueField="value"
            onChange={onLanguageSelectionChanged}
          />
        </>
      )}
    </Content>
  );
}
