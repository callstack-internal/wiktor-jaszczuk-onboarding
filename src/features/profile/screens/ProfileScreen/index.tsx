import {useState} from 'react';
import {Content} from '../../../../components/Content';
import {Dropdown} from 'react-native-element-dropdown';
import {Text} from 'react-native';
export function ProfileScreen() {
  const [language, setLanguage] = useState<AppLanguage>('en');

  return (
    <Content>
      <Text>Select Language:</Text>
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
