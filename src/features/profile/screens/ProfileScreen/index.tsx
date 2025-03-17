import React, {use, useCallback, useMemo} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Content} from '../../../../components/Content';
import {
  changeLanguage,
  type SupportedLanguage,
  supportedLanguages,
  useGetCurrentLanguage,
  useTranslation,
} from '../../../language';

export function ProfileScreen() {
  const {t} = useTranslation('profile');
  const languageQuery = useGetCurrentLanguage();
  const language = use(languageQuery.promise);

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
      <React.Suspense fallback={<ActivityIndicator />}>
        <Text>{t('label.selectLanguage')}</Text>
        <Dropdown
          value={language}
          data={dropdownItems}
          labelField="label"
          valueField="value"
          onChange={onLanguageSelectionChanged}
        />
      </React.Suspense>
    </Content>
  );
}
