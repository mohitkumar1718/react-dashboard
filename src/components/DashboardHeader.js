import React from 'react';

const DashboardHeader = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-sm">
    <input
      type="text"
      placeholder="Search"
      className="border border-gray-300 rounded-lg p-2 w-1/3"
    />
    <div className="flex items-center space-x-4">
      <button className="relative">
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>
      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
      <span>Mohit Kumar</span>
    </div>
  </header>
);

export default DashboardHeader;
