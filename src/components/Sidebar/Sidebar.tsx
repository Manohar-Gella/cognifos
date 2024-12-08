import React from 'react';
import { SearchBar } from './SearchBar';
import { NewChatButton } from './NewChatButton';
import { PlanInfo } from './PlanInfo';
import { UpgradeButton } from './UpgradeButton';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 w-72 bg-black p-4 flex flex-col
        transform transition-transform duration-300 ease-in-out z-30
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="mb-4">
          <NewChatButton />
        </div>
        <div className="mb-4">
          <SearchBar />
        </div>
        <div className="flex-1">
          <p className="text-gray-200">No chats found</p>
        </div>
        <div className="space-y-2">
          <PlanInfo plan="Free" />
          <UpgradeButton />
        </div>
      </div>
    </>
  );
};