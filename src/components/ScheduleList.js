import React from 'react';
import ScheduleItem from './ScheduleItem';

const ScheduleList = ({ title, schedules }) => (
  <div className="mt-4 mb-2">
    <p className="text-gray-500 font-medium text-sm">{title}</p>
    <ul className="space-y-2">
      {schedules.map((schedule, index) => (
        <ScheduleItem key={index} title={schedule.title} time={schedule.time} />
      ))}
    </ul>
  </div>
);

export default ScheduleList;
