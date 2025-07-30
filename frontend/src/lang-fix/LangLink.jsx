// components/LangLink.jsx
import { Link, useLocation } from 'react-router-dom';
import { languageSlugs, urlTranslations } from '../urlTranslations';

const LangLink = ({ to, lang, children, ...props }) => {
  const location = useLocation();
  const currentSlug = location.pathname.slice(1) || '';
  const { page } = urlTranslations[currentSlug] || { page: 'main' };
  const targetSlug = to === 'current' ? languageSlugs[page][lang] : languageSlugs[to][lang] || languageSlugs.main[lang];

  return (
    <Link to={`/${targetSlug}`} {...props}>
      {children}
    </Link>
  );
};

export default LangLink;