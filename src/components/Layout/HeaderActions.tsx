import React from 'react';
import { FiImage, FiCommand, FiCode, FiSettings } from 'react-icons/fi';

export const HeaderActions: React.FC = () => {
  const actions = [
    { icon: FiImage, label: 'Images' },
    { icon: FiCommand, label: 'Commands' },
    { icon: FiCode, label: 'Code' },
    { icon: FiSettings, label: 'Settings' },
  ];

  return (
    <div className="flex space-x-2 md:space-x-4">
      {actions.map(({ icon: Icon, label }) => (
        <button 
          key={label}
          className="text-gray-400 hover:text-gray-200 p-2"
          aria-label={label}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  );
};