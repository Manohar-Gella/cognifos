import React from 'react';
import { HeaderActions } from '../Layout/HeaderActions';

export const Header: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 p-2 md:p-4 z-10">
      <HeaderActions />
    </div>
  );
};