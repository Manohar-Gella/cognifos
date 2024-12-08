import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { MobileHeader } from './MobileHeader';
import { MainContent } from './MainContent';

export const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="flex-1 flex flex-col relative w-full">
        <MobileHeader onMenuClick={toggleSidebar} />
        <MainContent />
      </div>
    </div>
  );
};