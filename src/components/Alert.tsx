import React from 'react';

const Alert: React.FC = () => {
  return (
    <div className="overflow-hidden -mb-5">
      <div className="animate-scroll text-base font-bold text-red-600 whitespace-nowrap">
        Website under maintenance. Please check back later.
      </div>
    </div>
  );
};

export default Alert;
