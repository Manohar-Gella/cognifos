import React from 'react';

interface PlanInfoProps {
  plan: string;
}

export const PlanInfo: React.FC<PlanInfoProps> = ({ plan }) => {
  return (
    <div className="bg-gray-800 px-4 py-2 rounded-md">
      <p className="text-gray-200">Current plan: {plan}</p>
    </div>
  );
};