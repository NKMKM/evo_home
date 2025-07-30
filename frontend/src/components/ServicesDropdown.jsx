import React, { useState, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import LanguageLink from './LanguageLink';
import { getUrlByKey } from '../urlTranslation';

const ServicesDropdown = () => {
  const { t, i18n } = useTranslation('components/ServicesDropdown');

  const services = [
    {
      name: t('first_element.h'),
      main_menu_key: 'turnkeyRenovation',
      submenu: [
        t('first_element.list_of_services.first'),
        t('first_element.list_of_services.second'),
        t('first_element.list_of_services.third'),
        t('first_element.list_of_services.fourth'),
        t('first_element.list_of_services.fifth'),
        t('first_element.list_of_services.sixth'),
        t('first_element.list_of_services.seventh'),
      ],
      submenu_keys: [
        'designerRenovation',
        'exclusiveRenovation',
        'studio',
        'tworoomApartment',
        'threeroomApartment',
        'fourroomApartment',
        'twostoryApartment',
      ],
    },
    {
      name: t('second_element.h'),
      main_menu_key: 'roomRenovation',
      submenu: [
        t('second_element.list_of_services.first'),
        t('second_element.list_of_services.second'),
        t('second_element.list_of_services.third'),
        t('second_element.list_of_services.fourth'),
        t('second_element.list_of_services.fifth'),
        t('second_element.list_of_services.sixth'),
        t('second_element.list_of_services.seventh'),
      ],
      submenu_keys: [
        'livingRoom',
        'bedroom',
        'childrenRoom',
        'corridor',
        'kitchen',
        'bathroom',
        'stairs',
      ],
    },
    {
      name: t('third_element.h'),
      main_menu_key: 'commercialPremises',
      submenu: [
        t('third_element.list_of_services.first'),
        t('third_element.list_of_services.second'),
        t('third_element.list_of_services.third'),
        t('third_element.list_of_services.fourth'),
        t('third_element.list_of_services.fifth'),
        t('third_element.list_of_services.sixth'),
        t('third_element.list_of_services.seventh'),
      ],
      submenu_keys: [
        'businessCenter',
        'restaurant',
        'commercialPremisesRenovation',
        'office',
        'warehouse',
        'fitnessClub',
        'hotel',
      ],
    },
    {
      name: t('fourth_element.h'),
      main_menu_key: 'systems',
      submenu: [
        t('fourth_element.list_of_services.first'),
        t('fourth_element.list_of_services.second'),
        t('fourth_element.list_of_services.third'),
        t('fourth_element.list_of_services.fourth'),
        t('fourth_element.list_of_services.fifth'),
      ],
      submenu_keys: [
        'electricalSystem',
        'gasSystem',
        'floorHeating',
        'sewage',
        'climateControl',
      ],
    },
  ];

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hideTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
      setHoveredIndex(null);
    }, 150);
  };

  return (
    <div
      className="relative select-none z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer px-4 py-2">
        <p className="navbar-underline-animate-hover text-[16px] sm:text-[18px] lg:text-[20px]">
          {t('h')} <KeyboardArrowDownIcon />
        </p>
      </div>

      {isDropdownVisible && (
        <div className="absolute top-full left-0 mt-2 w-[300px] sm:w-[400px] lg:w-[468px] bg-white z-50 transition-opacity duration-300 shadow-xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <LanguageLink
                to={service.main_menu_key}
                className="flex px-4 py-2 h-[60px] sm:h-[70px] lg:h-[80px] hover:bg-[#F9B33B] text-[16px] sm:text-[18px] lg:text-[22px] items-center cursor-pointer"
              >
                {service.name}
              </LanguageLink>

              {hoveredIndex === index && service.submenu.length > 0 && (
                <div className="absolute top-0 left-full ml-1 w-[300px] sm:w-[400px] lg:w-[468px] bg-white z-50 shadow-xl">
                  {service.submenu.map((item, subIdx) => (
                    <LanguageLink
                      key={subIdx}
                      to={service.submenu_keys?.[subIdx] || '#'}
                      className="flex px-4 py-2 h-[60px] sm:h-[70px] lg:h-[80px] hover:bg-[#F9B33B] text-[16px] sm:text-[18px] lg:text-[22px] items-center cursor-pointer"
                    >
                      {item}
                    </LanguageLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
