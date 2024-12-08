import React from 'react';

export const ChatArea: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-gray-400">
      <div className="max-w-md text-center">
        <p className="text-lg md:text-xl mb-4">Message Cognifos...</p>
        <button className="bg-gray-700 text-white px-4 md:px-6 py-2 rounded-md hover:bg-gray-600 transition-colors">
          Surprise me
        </button>
      </div>
    </div>
  );
};