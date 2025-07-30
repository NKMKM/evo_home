import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getUrlByKey } from '../urlTranslation';

const LanguageLink = ({ to, children, className, ...props }) => {
  const { i18n } = useTranslation();
  
  // Если to - это ключ из urlTranslations, получаем правильный URL для текущего языка
  const url = getUrlByKey(to, i18n.language);
  
  return (
    <Link to={url} className={className} {...props}>
      {children}
    </Link>
  );
};

export default LanguageLink; 