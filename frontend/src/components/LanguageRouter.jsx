import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { urlTranslations, getKeyByUrl, getUrlByKey } from '../urlTranslation';

const LanguageRouter = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentLanguage = i18n.language;
    const currentPath = location.pathname;

    // Проверяем, есть ли текущий путь в переводах
    const urlKey = getKeyByUrl(currentPath, currentLanguage);
    
    if (urlKey) {
      // URL соответствует текущему языку, ничего не делаем
      return;
    }

    // Проверяем, есть ли этот путь на других языках
    for (const language of ['en', 'ru', 'it']) {
      const urlKeyForLanguage = getKeyByUrl(currentPath, language);
      if (urlKeyForLanguage) {
        // Нашли ключ для другого языка, перенаправляем на правильный URL для текущего языка
        const correctUrl = getUrlByKey(urlKeyForLanguage, currentLanguage);
        if (correctUrl !== currentPath) {
          navigate(correctUrl, { replace: true });
          return;
        }
      }
    }

    // Если путь не найден ни в одном языке, проверяем, может быть это старый URL
    // Здесь можно добавить логику для обработки старых URL
  }, [location.pathname, i18n.language, navigate]);

  return children;
};

export default LanguageRouter; 