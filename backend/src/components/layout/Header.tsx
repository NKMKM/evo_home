import React, { useState } from 'react';
import { BellIcon, SunIcon, MoonIcon, UserIcon, SearchIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
const Header = () => {
  const {
    user
  } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real application, you would apply the dark mode to the entire app
  };
  return <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex-1">
        <div className="relative w-64">
          <input type="text" placeholder="Search..." className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <SearchIcon size={18} />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100" onClick={toggleDarkMode}>
          {isDarkMode ? <SunIcon size={20} className="text-gray-600" /> : <MoonIcon size={20} className="text-gray-600" />}
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <UserIcon size={16} />
          </div>
          <span className="font-medium text-gray-700">
            {user?.name || 'User'}
          </span>
        </div>
      </div>
    </header>;
};
export default Header;