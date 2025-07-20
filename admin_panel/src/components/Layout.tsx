import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, LayoutDashboardIcon, SettingsIcon, LogOutIcon, MenuIcon, XIcon } from 'lucide-react';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // In a real app, you would clear auth tokens, etc.
    navigate('/login');
  };
  return <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <motion.div className="hidden md:flex flex-col bg-white border-r border-gray-100 shadow-sm" initial={{
      width: isSidebarOpen ? 240 : 72
    }} animate={{
      width: isSidebarOpen ? 240 : 72
    }} transition={{
      duration: 0.2
    }}>
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          {isSidebarOpen && <motion.h2 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.1
        }} className="text-lg font-light text-gray-800">
              Evo Admin Panel
            </motion.h2>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 rounded-md hover:bg-gray-100 text-gray-500">
            <MenuIcon size={18} />
          </button>
        </div>
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-800 bg-blue-50 text-blue-600">
                <LayoutDashboardIcon size={18} className="mr-3" />
                {isSidebarOpen && <span>Dashboard</span>}
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout} className="flex items-center text-gray-600 hover:text-gray-800">
            <LogOutIcon size={18} className="mr-3" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.div>
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileSidebarOpen(true)} className="fixed top-4 left-4 z-20 p-2 rounded-md bg-white shadow-md text-gray-700">
          <MenuIcon size={20} />
        </button>
        {isMobileSidebarOpen && <motion.div className="fixed inset-0 bg-black/50 z-30" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setIsMobileSidebarOpen(false)}>
            <motion.div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40" initial={{
          x: -280
        }} animate={{
          x: 0
        }} exit={{
          x: -280
        }} transition={{
          duration: 0.3
        }} onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-light text-gray-800">
                  Evo Admin Panel
                </h2>
                <button onClick={() => setIsMobileSidebarOpen(false)} className="p-1 rounded-md hover:bg-gray-100 text-gray-500">
                  <XIcon size={18} />
                </button>
              </div>
              <nav className="py-4">
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-800 bg-blue-50 text-blue-600">
                      <LayoutDashboardIcon size={18} className="mr-3" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50">
                      <HomeIcon size={18} className="mr-3" />
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50">
                      <SettingsIcon size={18} className="mr-3" />
                      <span>Settings</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="p-4 border-t border-gray-100">
                <button onClick={handleLogout} className="flex items-center text-gray-600 hover:text-gray-800">
                  <LogOutIcon size={18} className="mr-3" />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          </motion.div>}
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>;
}