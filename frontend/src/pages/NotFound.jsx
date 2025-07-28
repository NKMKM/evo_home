import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation('NotFound');
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="Error 404: Pagina non trovata" />
      </Helmet>
      <div className="w-auto sm:h-[800px] lg:h-[765px] text-center flex flex-col justify-center items-center">
        <h1 className="text-[200px] font-bold">
          4<span className="text-[#f9b33b]">0</span>4
        </h1>
        <p className="text-7xl font-thin">{t('p')}</p>
      </div>
    </>
  );
};

export default NotFound;