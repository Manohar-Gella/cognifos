import React from 'react';

const ChatWindow = () => {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      {/* Centered content */}
      <div className="flex flex-col items-center justify-center text-center flex-grow">
        <p className="text-gray-400 text-xl mb-4">Message Cognifos.</p>
        <button className="bg-gray-500 text-white p-2 rounded">Surprise me</button>
      </div>

      {/* Search bar at the bottom */}
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-800 text-gray-400 p-3 rounded-l-md"
        />
        <button className="bg-gray-600 p-3 rounded-r-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 15.232l4.768 4.768m-4.768-4.768A6.5 6.5 0 1117.5 7a6.5 6.5 0 01-2.268 8.268z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
