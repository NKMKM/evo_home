import React, { useState } from 'react';
import { SaveIcon, UserIcon, LockIcon, MailIcon, BellIcon, GlobeIcon, PaletteIcon } from 'lucide-react';
const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <SaveIcon size={16} className="mr-2" />
          Save Changes
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200">
          <aside className="w-64 bg-gray-50 border-r border-gray-200">
            <nav className="p-4 space-y-1">
              <button onClick={() => setActiveTab('general')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'general' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                <GlobeIcon size={16} className="mr-3" />
                General
              </button>
              <button onClick={() => setActiveTab('user')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'user' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                <UserIcon size={16} className="mr-3" />
                User Profile
              </button>
              <button onClick={() => setActiveTab('security')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'security' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                <LockIcon size={16} className="mr-3" />
                Security
              </button>
              <button onClick={() => setActiveTab('notifications')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                <BellIcon size={16} className="mr-3" />
                Notifications
              </button>
              <button onClick={() => setActiveTab('appearance')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'appearance' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                <PaletteIcon size={16} className="mr-3" />
                Appearance
              </button>
            </nav>
          </aside>
          <div className="flex-1 p-6">
            {activeTab === 'general' && <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">
                  General Settings
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site Title
                    </label>
                    <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Site Title" value="My Awesome CMS" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site URL
                    </label>
                    <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="https://example.com" value="https://example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Admin Email
                    </label>
                    <input type="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="admin@example.com" value="admin@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Timezone
                    </label>
                    <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option>UTC</option>
                      <option>America/New_York</option>
                      <option>Europe/London</option>
                      <option>Asia/Tokyo</option>
                      <option>Australia/Sydney</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date Format
                    </label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input id="date-format-1" name="date-format" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" checked />
                        <label htmlFor="date-format-1" className="ml-3 block text-sm text-gray-700">
                          May 15, 2023 (F j, Y)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="date-format-2" name="date-format" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <label htmlFor="date-format-2" className="ml-3 block text-sm text-gray-700">
                          2023-05-15 (Y-m-d)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="date-format-3" name="date-format" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <label htmlFor="date-format-3" className="ml-3 block text-sm text-gray-700">
                          15/05/2023 (d/m/Y)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="date-format-4" name="date-format" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <label htmlFor="date-format-4" className="ml-3 block text-sm text-gray-700">
                          05/15/2023 (m/d/Y)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {activeTab === 'user' && <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">
                  User Profile
                </h2>
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        <UserIcon size={40} className="text-gray-400" />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      Admin User
                    </h3>
                    <p className="text-sm text-gray-500">admin@example.com</p>
                    <p className="text-sm text-gray-500">Administrator</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="First Name" value="Admin" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Last Name" value="User" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon size={16} className="text-gray-400" />
                        </div>
                        <input type="email" className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300" placeholder="Email" value="admin@example.com" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Bio
                    </label>
                    <textarea rows={3} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="A short bio about yourself"></textarea>
                  </div>
                </div>
              </div>}
            {activeTab === 'security' && <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Security Settings
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockIcon size={16} className="text-gray-400" />
                        </div>
                        <input type="password" className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300" placeholder="Current Password" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockIcon size={16} className="text-gray-400" />
                        </div>
                        <input type="password" className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300" placeholder="New Password" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockIcon size={16} className="text-gray-400" />
                        </div>
                        <input type="password" className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300" placeholder="Confirm New Password" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Change Password
                    </button>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Two-Factor Authentication
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="tfa-enabled" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label htmlFor="tfa-enabled" className="ml-2 block text-sm text-gray-900">
                          Enable Two-Factor Authentication
                        </label>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        Configure
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Session Management
                    </h3>
                    <button className="text-sm text-red-600 hover:text-red-800">
                      Log Out All Other Sessions
                    </button>
                  </div>
                </div>
              </div>}
            {activeTab === 'notifications' && <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Notification Settings
                </h2>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Email Notifications
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="notify-comments" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                        <label htmlFor="notify-comments" className="ml-2 block text-sm text-gray-900">
                          New comments
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="notify-updates" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                        <label htmlFor="notify-updates" className="ml-2 block text-sm text-gray-900">
                          System updates
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="notify-login" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                        <label htmlFor="notify-login" className="ml-2 block text-sm text-gray-900">
                          New login attempts
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="notify-newsletter" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label htmlFor="notify-newsletter" className="ml-2 block text-sm text-gray-900">
                          Newsletter
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      System Notifications
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input id="notify-browser" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                          <label htmlFor="notify-browser" className="ml-2 block text-sm text-gray-900">
                            Browser notifications
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input id="notify-sound" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                          <label htmlFor="notify-sound" className="ml-2 block text-sm text-gray-900">
                            Sound notifications
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {activeTab === 'appearance' && <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Appearance Settings
                </h2>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Theme</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                      <div className="h-24 bg-white border border-gray-200 rounded"></div>
                      <div className="mt-2 text-center">
                        <span className="text-sm font-medium">Light</span>
                      </div>
                    </div>
                    <div className="border border-blue-500 ring-2 ring-blue-200 rounded-lg p-4 cursor-pointer">
                      <div className="h-24 bg-gray-800 border border-gray-700 rounded"></div>
                      <div className="mt-2 text-center">
                        <span className="text-sm font-medium">Dark</span>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                      <div className="h-24 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded"></div>
                      <div className="mt-2 text-center">
                        <span className="text-sm font-medium">System</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Sidebar Position
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input id="sidebar-left" name="sidebar-position" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" checked />
                        <label htmlFor="sidebar-left" className="ml-3 block text-sm text-gray-700">
                          Left
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="sidebar-right" name="sidebar-position" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <label htmlFor="sidebar-right" className="ml-3 block text-sm text-gray-700">
                          Right
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Color Scheme
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="border border-blue-500 ring-2 ring-blue-200 rounded-full w-10 h-10 bg-blue-600"></div>
                      <div className="border border-gray-200 hover:border-blue-500 rounded-full w-10 h-10 bg-purple-600"></div>
                      <div className="border border-gray-200 hover:border-blue-500 rounded-full w-10 h-10 bg-green-600"></div>
                      <div className="border border-gray-200 hover:border-blue-500 rounded-full w-10 h-10 bg-red-600"></div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Font Size
                    </h3>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">A</span>
                      <input type="range" min="1" max="5" value="3" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                      <span className="text-base text-gray-500 ml-2">A</span>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default SettingsPage;