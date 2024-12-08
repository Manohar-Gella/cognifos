import React from 'react';
import { FiMenu } from 'react-icons/fi';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-black lg:hidden z-20">
      <button 
        onClick={onMenuClick}
        className="text-gray-400 hover:text-gray-200"
      >
        <FiMenu size={24} />
      </button>
      <h1 className="text-white text-lg font-semibold">Cognifos Chat</h1>
      <div className="w-8" aria-hidden="true"></div>
    </div>
  );
};