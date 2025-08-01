import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { urlTranslations, getKeyByUrl, getUrlByKey } from '../urlTranslation';

const LanguageRouter = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Ждем полной инициализации i18n
    if (!i18n.isInitialized || !i18n.language) {
      return;
    }

    const currentLanguage = i18n.language;
    const currentPath = location.pathname;

    // Проверяем, есть ли текущий путь в переводах для текущего языка
    const urlKey = getKeyByUrl(currentPath, currentLanguage);
    
    if (urlKey) {
      // URL соответствует текущему языку, ничего не делаем
      return;
    }

    // Проверяем, есть ли этот путь на других языках
    for (const language of ['en', 'ru', 'it']) {
      if (language === currentLanguage) continue; // пропускаем текущий язык
      
      const urlKeyForLanguage = getKeyByUrl(currentPath, language);
      if (urlKeyForLanguage) {
        // Нашли ключ для другого языка, перенаправляем на правильный URL для текущего языка
        const correctUrl = getUrlByKey(urlKeyForLanguage, currentLanguage);
        if (correctUrl && correctUrl !== currentPath) {
          navigate(correctUrl, { replace: true });
          return;
        }
      }
    }

    // Если путь не найден ни в одном языке, оставляем как есть (404 обработается роутером)
  }, [location.pathname, i18n.language, i18n.isInitialized, navigate]);

  return children;
};

export default LanguageRouter; 