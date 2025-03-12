import {useState} from 'react';
import {Content} from '../../../../components/Content';
import {Dropdown} from 'react-native-element-dropdown';
import {Text} from 'react-native';
import {useTranslation} from '../../../language';

export function ProfileScreen() {
  const [language, setLanguage] = useState<AppLanguage>('en');

  const {t} = useTranslation('profile');

  return (
    <Content>
      <Text>{t('label.selectLanguage')}</Text>
      <Dropdown
        value={language}
        data={dropdownItems}
        labelField="label"
        valueField="value"
        onChange={item => setLanguage(item.value)}
      />
    </Content>
  );
}

const HARDCODED_APP_LANGUAGES = ['en', 'pl'] as const;
type AppLanguage = (typeof HARDCODED_APP_LANGUAGES)[number];

const dropdownItems: {label: string; value: AppLanguage}[] = [
  {label: 'Polski', value: 'pl'},
  {label: 'English', value: 'en'},
];
