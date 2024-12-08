import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const ChatInput: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 pb-4 md:pb-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-gray-800 text-gray-200 px-4 py-3 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
        aria-label="Search"
      >
        <FiSearch size={20} />
      </button>
    </div>
  );
};