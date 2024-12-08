import React from 'react';

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search chats...' }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-gray-800 text-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};