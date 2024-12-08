import React from 'react';

export const NewChatButton: React.FC = () => {
  return (
    <button className="w-full bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
      New chat +
    </button>
  );
};