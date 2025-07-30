import { useTranslation } from 'react-i18next';
import { getUrlByKey } from '../urlTranslation';

export const useLanguageUrl = () => {
  const { i18n } = useTranslation();

  const getUrl = (key) => {
    return getUrlByKey(key, i18n.language);
  };

  const navigateTo = (key, navigate) => {
    const url = getUrl(key);
    navigate(url);
  };

  return {
    getUrl,
    navigateTo,
    currentLanguage: i18n.language
  };
}; 