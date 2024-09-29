import React from 'react';
import { FiSettings, FiTool, FiCode, FiImage } from 'react-icons/fi';

const TopNav = () => {
  return (
    <div className="absolute top-0 right-0 flex space-x-4 p-4 text-white">
      <FiImage className="cursor-pointer" />
      <FiTool className="cursor-pointer" />
      <FiCode className="cursor-pointer" />
      <FiSettings className="cursor-pointer" />
    </div>
  );
};

export default TopNav;
