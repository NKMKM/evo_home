import React, { useState, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ServicesDropdown = () => {
  const {t} = useTranslation('components/ServicesDropdown')

  const services = [
    {
      name: t('first_element.h'),
      main_menu_href:'/turnkey_renovation',
      submenu: [t('first_element.list_of_services.first'), t('first_element.list_of_services.second'),t('first_element.list_of_services.third'),t('first_element.list_of_services.fourth'),t('first_element.list_of_services.fifth'),t('first_element.list_of_services.sixth'),t('first_element.list_of_services.seventh')],
      submenu_href:['/turnkey_renovation/designer_renovation','/turnkey_renovation/exclusive_renovation','/turnkey_renovation/studio','/turnkey_renovation/tworoom_apartments','/turnkey_renovation/threeroom_apartments','/turnkey_renovation/fourroom_apartments','/turnkey_renovation/twostory_apartments']
    },
    {
      name: t('second_element.h'),
      main_menu_href:'/room_renovation',
      submenu: [t('second_element.list_of_services.first'), t('second_element.list_of_services.second'),t('second_element.list_of_services.third'),t('second_element.list_of_services.fourth'),t('second_element.list_of_services.fifth'),t('second_element.list_of_services.sixth'),t('second_element.list_of_services.seventh')],
      submenu_href:['/room_renovation/living_room','/room_renovation/bedroom','/room_renovation/children_room','/room_renovation/corridor','/room_renovation/kitchen','/room_renovation/bathroom','/room_renovation/stairs']
    },
    {
      name: t('third_element.h'),
      main_menu_href:'/commercial_premises',
      submenu: [t('third_element.list_of_services.first'), t('third_element.list_of_services.second'),t('third_element.list_of_services.third'),t('third_element.list_of_services.fourth'),t('third_element.list_of_services.fifth'),t('third_element.list_of_services.sixth'),t('third_element.list_of_services.seventh')],
      submenu_href:['/commercial_premises/business_center','/commercial_premises/restaurant','/commercial_premises/commercial_premises_renovation','/commercial_premises/office','/commercial_premises/warehouse','/commercial_premises/fitness_club','/commercial_premises/hotel']
    },
    {
      name: t('fourth_element.h'),
      main_menu_href:'/systems',
      submenu: [t('fourth_element.list_of_services.first'), t('fourth_element.list_of_services.second'),t('fourth_element.list_of_services.third'),t('fourth_element.list_of_services.fourth'),t('fourth_element.list_of_services.fifth')],
      submenu_href:['/systems/electrical_system','/systems/gas_system','/systems/floor_heating','/systems/sewage','/systems/climate_control']
  
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
    }, 50);
  };

  return (
    <div
      className="relative select-none z-999"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer">
        <p className="navbar-underline-animate-hover">{t('h')} <KeyboardArrowDownIcon/></p>
      </div>  

      {isDropdownVisible && (
        <div className="absolute top-full left-0 mt-2 w-[468px] bg-white shadow-2xl  z-50 transition-opacity duration-300">
          {services.map((service ,index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                to={service.main_menu_href}
                className="flex px-4 py-2 h-[80px] hover:bg-[#F9B33B] text-[22px] items-center cursor-pointer"
              >
                {service.name}
              </Link>

              {/* Уникальное подменю */}
              {hoveredIndex === index && service.submenu.length > 0 && (
                <div className="absolute top-0 left-full ml-1 w-[468px] bg-white shadow-lg  z-50">
                  {service.submenu.map((item, subIdx) => (
                    <Link
                      key={subIdx}
                      to={service.submenu_href?.[subIdx] || '#'}
                      className="flex px-4 py-2 h-[80px] hover:bg-[#F9B33B] text-[22px] items-center cursor-pointer"
                    >
                      {item}
                    </Link>
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

