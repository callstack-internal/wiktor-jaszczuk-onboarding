import {useQuery} from '@tanstack/react-query';
import {getCurrentLanguage} from '../../i18next';

export function useGetCurrentLanguage() {
  return useQuery({
    queryFn: getCurrentLanguage,
    queryKey: ['getCurrentLanguage'],
    staleTime: 0,
  });
}
