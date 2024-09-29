import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-black text-white h-full w-64 flex flex-col justify-between p-4">
      <div>
        {/* New Chat Button */}
        <button className="bg-white text-black p-2 rounded w-full mb-4">New chat +</button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search chats..."
          className="bg-gray-800 text-gray-400 p-2 rounded w-full mb-4"
        />

        {/* No Chats Found Text */}
        <p>No chats found</p>
      </div>

      <div className="flex flex-col space-y-2">
        {/* Plan Info */}
        <div className="bg-gray-700 p-2 rounded mb-4">
          <p>Current plan: Free</p>
        </div>
        {/* Upgrade Button */}
        <button className="bg-gray-500 p-2 rounded w-full">Upgrade to Pro</button>
      </div>
    </div>
  );
};

export default Sidebar;
