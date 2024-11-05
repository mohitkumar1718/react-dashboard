import React from 'react';

const AnnouncementItem = ({ title, time }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm">
    <div>
      <p className="text-gray-800 font-medium">{title}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
    <div className="flex items-center space-x-3 text-gray-400">
      <button>
        📌
      </button>
      <input
        type="radio"
        className="form-radio h-4 w-4 text-gray-400"
        name="announcement-option"
        aria-label="Select announcement option"
      />
    </div>
  </div>
);

const Announcements = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-blue-900">Announcement</h2>
      <span className="text-sm text-gray-500">Today, 13 Sep 2021</span>
    </div>
    <ul className="space-y-2">
      <AnnouncementItem title="Outing schedule for every department" time="5 Minutes ago" />
      <AnnouncementItem title="Meeting HR Department" time="Yesterday, 12:30 PM" />
      <AnnouncementItem title="IT Department need two more talents for UX/UI Designer position" time="Yesterday, 09:15 AM" />
    </ul>
    <div className="text-center mt-4">
      <button className="text-red-500 text-sm font-medium hover:underline">See All Announcements</button>
    </div>
  </div>
);

export default Announcements;
