import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import left_decoration from '../../assets/images/leftside_black_decoration.png';
import right_decoration from '../../assets/images/rightside_black_decoration.png';
import tatto_studio from '../../assets/images/projects_images/tatto_studio.jpg';
import bar from '../../assets/images/projects_images/bar.jpg';
import bath from '../../assets/images/projects_images/bath.jpg';
import hall from '../../assets/images/projects_images/hall.jpg';
import kitchen from '../../assets/images/projects_images/kitchen.jpg';
import basement from '../../assets/images/services_images/basement.jpg';

const Projects = () => {
  const { t } = useTranslation('home/Projects');
  const selectedLang = localStorage.getItem('language') || 'en';

  return (
    <main className="sm:w-full lg:w-[1650px]  max-w-[1641px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <header className="flex flex-row items-center justify-center w-full">
        <img src={left_decoration} alt="left decoration" loading="lazy" className="w-[276px] h-auto hidden lg:block" />
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[70px] text-center px-4">{t('h')}</h1>
        <img src={right_decoration} alt="right decoration" loading="lazy" className="w-[276px] h-auto hidden lg:block" />
      </header>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] italic font-light text-center mx-auto max-w-[1410px]">{t('p')}</p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {[
          { img: tatto_studio, alt: 'tatto studio', key: 'first_element' },
          { img: bar, alt: 'bar', key: 'second_element' },
          { img: basement, alt: 'basement', key: 'third_element' },
          { img: bath, alt: 'bath', key: 'fourth_element' },
          { img: kitchen, alt: 'kitchen', key: 'fifth_element' },
          { img: hall, alt: 'hall', key: 'sixth_element' },
        ].map((project) => (
          <div key={project.key} className="relative w-full max-w-[528px] mx-auto h-[300px] sm:h-[350px] lg:h-[407px] group">
            <div className="w-full h-full group-hover:brightness-50 transition duration-300">
              <img src={project.img} alt={project.alt} loading="lazy" className="w-full h-full rounded-[10px] object-cover" />
            </div>
            <div className="absolute bottom-4 text-white bg-gradient-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4">
              <h2 className={`${selectedLang === 'it' ? 'text-xl sm:text-2xl lg:text-[28px]' : 'text-2xl sm:text-3xl lg:text-[32px]'}`}>{t(`${project.key}.h`)}</h2>
              <p className="text-sm sm:text-base lg:text-[18px]">{t(`${project.key}.p`)}</p>
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <Link
                to="/our_works"
                className="bg-[#F9B33B] text-black font-bold text-lg sm:text-xl lg:text-[30px] flex justify-center items-center w-[200px] sm:w-[251px] h-12 sm:h-[67px] rounded-[10px]"
              >
                {t('button')}
              </Link>
            </div>
          </div>
        ))}
      </section>
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
        <div className="h-[1px] w-full sm:w-1/3 lg:w-[625.5px] bg-[#F9B33B] hidden lg:block"></div>
        <Link
          to="/our_works"
          className="w-full sm:w-[389px] h-12 sm:h-[67px] bg-[#F9B33B] text-lg sm:text-xl lg:text-[30px] font-semibold flex items-center justify-center rounded-[10px] hover:scale-110 transition duration-300"
        >
          {t('button')}
        </Link>
        <div className="h-[1px] w-full sm:w-1/3 lg:w-[625.5px] bg-[#F9B33B] hidden lg:block"></div>
      </div>
    </main>
  );
};

export default Projects;