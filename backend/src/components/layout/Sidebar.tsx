import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, FileTextIcon, ImageIcon, SearchIcon, PaletteIcon, LinkIcon, SettingsIcon, DatabaseIcon, ImportIcon, LogOutIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
const Sidebar = () => {
  const {
    logout
  } = useAuth();
  const menuItems = [{
    title: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />,
    path: '/'
  }, {
    title: 'Pages & Content',
    icon: <FileTextIcon size={20} />,
    path: '/pages'
  }, {
    title: 'Media',
    icon: <ImageIcon size={20} />,
    path: '/media'
  }, {
    title: 'Site Structure',
    icon: <div size={20} />,
    path: '/structure'
  }, {
    title: 'SEO',
    icon: <SearchIcon size={20} />,
    path: '/seo'
  }, {
    title: 'Templates',
    icon: <PaletteIcon size={20} />,
    path: '/templates'
  }, {
    title: 'Integrations',
    icon: <LinkIcon size={20} />,
    path: '/integrations'
  }, {
    title: 'Settings',
    icon: <SettingsIcon size={20} />,
    path: '/settings'
  }, {
    title: 'Backup',
    icon: <DatabaseIcon size={20} />,
    path: '/backup'
  }, {
    title: 'Import/Export',
    icon: <ImportIcon size={20} />,
    path: '/import-export'
  }];
  return <aside className="w-64 h-full bg-white border-r border-gray-200 shadow-sm">
      <div className="h-16 flex items-center justify-center border-b">
        <h1 className="text-xl font-bold text-blue-600">CMS Admin</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item, index) => <li key={index}>
              <NavLink to={item.path} className={({
            isActive
          }) => `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''}`}>
                <span className="mr-3">{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </li>)}
          <li>
            <button onClick={logout} className="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
              <span className="mr-3">
                <LogOutIcon size={20} />
              </span>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>;
};
export default Sidebar;