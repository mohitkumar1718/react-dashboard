import React from 'react';

const ScheduleItem = ({ title, time }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm">
    <div>
      <p className="text-gray-800 font-medium">{title}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
    <button className="text-gray-400 text-lg hover:bg-gray-200 rounded-full p-1 focus:outline-none" aria-label="Options">
      &#8230;
    </button>
  </div>
);

export default ScheduleItem;
