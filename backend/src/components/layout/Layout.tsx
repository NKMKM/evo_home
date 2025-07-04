import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
const Layout: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  return <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>;
};
export default Layout;