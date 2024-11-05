import React from 'react';

const StatBox = ({ title, count, menCount, womenCount, percentage, percentageText }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full ">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <div className="text-4xl font-bold text-blue-900 mt-2">{count}</div>
      <div className="text-sm text-gray-500 mt-1">
        <p>{menCount} Men</p>
        <p>{womenCount} Women</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-red-500">
          <span className="text-sm font-semibold mr-1">{percentage}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5L20 17" />
          </svg>
        </div>
        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">{percentageText}</span>
      </div>
    </div>
  );
};

export default StatBox;
