import {Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Content} from '../../../../components/Content';
import {
  changeLanguage,
  getCurrentLanguage,
  type SupportedLanguage,
  useTranslation,
} from '../../../language';

export function ProfileScreen() {
  const {t} = useTranslation('profile');

  return (
    <Content>
      <Text>{t('label.selectLanguage')}</Text>
      <Dropdown
        value={getCurrentLanguage()}
        data={dropdownItems}
        labelField="label"
        valueField="value"
        onChange={(item: (typeof dropdownItems)[number]) =>
          changeLanguage(item.value)
        }
      />
    </Content>
  );
}

const dropdownItems: {label: string; value: SupportedLanguage}[] = [
  {label: 'Polski', value: 'pl'},
  {label: 'English', value: 'en'},
];
