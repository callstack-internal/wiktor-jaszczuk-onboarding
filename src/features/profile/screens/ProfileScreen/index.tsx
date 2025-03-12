import {useState} from 'react';
import {Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useAsyncEffect} from 'use-async-effect';
import {Content} from '../../../../components/Content';
import {
  changeLanguage,
  getCurrentLanguage,
  type SupportedLanguage,
  useTranslation,
} from '../../../language';

export function ProfileScreen() {
  const [language, setLanguage] = useState<undefined | SupportedLanguage>(
    undefined,
  );

  useAsyncEffect(async isMounted => {
    const currentLanguage = await getCurrentLanguage();
    if (isMounted()) {
      setLanguage(currentLanguage);
    }
  }, []);

  const {t} = useTranslation('profile');

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
            onChange={(item: (typeof dropdownItems)[number]) =>
              changeLanguage(item.value)
            }
          />
        </>
      )}
    </Content>
  );
}

const dropdownItems: {label: string; value: SupportedLanguage}[] = [
  {label: 'Polski', value: 'pl'},
  {label: 'English', value: 'en'},
];
