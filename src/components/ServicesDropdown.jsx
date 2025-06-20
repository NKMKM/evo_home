import React, { useState, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Ремонт квартир под ключ',
    main_menu_href:'/turnkey_renovation',
    submenu: ['Дизайнерский ремонт', 'Эксклюзивный ремонт','Ремонт квартир-студий','Ремонт двухкомнатных квартир','Ремонт трехкомнатных квартир','Ремонт четырехкомнатных квартир','Ремонт двуэтажных квартир'],
    submenu_href:['/turnkey_renovation/designer_renovation','/turnkey_renovation/exclusive_renovation','/turnkey_renovation/studio','/turnkey_renovation/tworoom_apartments','/turnkey_renovation/threeroom_apartments','/turnkey_renovation/fourroom_apartments','/turnkey_renovation/twostory_apartments']
  },
  {
    name: 'Ремонт комнат',
    main_menu_href:'/room_renovation',
    submenu: ['Ремонт гостинных', 'Ремонт спальных комнат', 'Ремонт детских комнат','Ремонт коридора','Ремонт кухни','Ремонт ванных комнат','Ремонт лестниц'],
    submenu_href:['/room_renovation/living_room','/room_renovation/bedroom','/room_renovation/children_room','/room_renovation/corridor','/room_renovation/kitchen','/room_renovation/bathroom','/room_renovation/stairs']
  },
  {
    name: 'Коммерческие помещения',
    main_menu_href:'/commercial_premises',
    submenu: ['Ремонт бизнес-центров','Ремонт баров и ресторанов','Ремонт коммерческих помещений','Ремонт офисов','Ремонт складов','Ремонт фитнес-клубов','Ремонт отелей'],
    submenu_href:['/commercial_premises/business_center','/commercial_premises/restaurant','/commercial_premises/commercial_premises_renovation','/commercial_premises/office','/commercial_premises/warehouse','/commercial_premises/fitness_club','/commercial_premises/hotel']
  },
  {
    name: 'Системы',
    main_menu_href:'/systems',
    submenu: ['Электрическая система','Газовая система','Подогрев пола','Система дренажа и канализации','Кондиционирования и климат контроль'],
    submenu_href:['/systems/electrical_system','/systems/gas_system','/systems/floor_heating','/systems/sewage','/systems/climate_control']

  },
];

const ServicesDropdown = () => {
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
      className="relative select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer">
        <p className="navbar-underline-animate-hover">УСЛУГИ <KeyboardArrowDownIcon/></p>
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

