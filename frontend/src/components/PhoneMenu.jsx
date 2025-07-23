import React, { useState, useRef, useEffect } from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const PhoneMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative block md:hidden bg-[#ffb429] rounded-[10px] z-10"
      ref={menuRef}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl p-2 w-[55px] h-[55px]"
      >
        <PhoneInTalkIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 text-lg mt-2 w-[200px] bg-white shadow-xl rounded-lg p-4 z-50">
          <a
            href="tel:+390123456789"
            className="block mb-2 font-bold text-black hover:text-[#F9B33B]"
          >
            +39 327 986 6412
          </a>
          <a
            href="tel:+390987654321"
            className="block font-bold text-black hover:text-[#F9B33B]"
          >
            +39 06 69353277
          </a>
        </div>
      )}
    </div>
  );
};

export default PhoneMenu;
