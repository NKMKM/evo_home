import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getKeyByUrl } from '../urlTranslation';
import { getBreadcrumbs } from '../utils/breadcrumbsConfig';
import LanguageLink from './LanguageLink';

const Breadcrumbs = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation('components/Breadcrumbs');

  // Получаем ключ текущей страницы
  const currentPageKey = getKeyByUrl(location.pathname, i18n.language);
  
  // Если не можем определить страницу, не показываем breadcrumbs
  if (!currentPageKey) {
    return null;
  }

  // Получаем массив breadcrumbs
  const breadcrumbsKeys = getBreadcrumbs(currentPageKey);

  // Если breadcrumbs содержит только главную страницу, не показываем их
  if (breadcrumbsKeys.length <= 1) {
    return null;
  }

  return (
    <nav className="breadcrumbs bg-white border-b border-gray-200 py-4 px-4 lg:px-8 shadow-sm">
      <ol className="flex items-center space-x-2 text-sm text-gray-600 max-w-7xl mx-auto">
        {breadcrumbsKeys.map((key, index) => {
          const isLast = index === breadcrumbsKeys.length - 1;
          const label = t(key);

          return (
            <li key={key} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-3 h-3 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {isLast ? (
                <span className="font-semibold text-[#F9B33B] text-base">{label}</span>
              ) : (
                <LanguageLink
                  to={key}
                  className="text-gray-600 hover:text-[#F9B33B] transition-colors duration-200 font-medium"
                >
                  {label}
                </LanguageLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;