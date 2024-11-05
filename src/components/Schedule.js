import React from 'react';
import ScheduleList from './ScheduleList';

// Dummy data for the schedule
const scheduleData = [
  {
    title: 'Priority',
    schedules: [
      { title: 'Review candidate applications', time: 'Today - 11:30 AM' },
      { title: 'Prepare monthly report', time: 'Today - 2:00 PM' },
    ],
  },
  {
    title: 'Other',
    schedules: [
      { title: 'Interview with candidates', time: 'Today - 10:30 AM' },
      { title: 'Short meeting with product designer from IT Department', time: 'Today - 09:15 AM' },
      { title: 'Team brainstorming session', time: 'Tomorrow - 10:00 AM' },
    ],
  },
  {
    title: 'Upcoming',
    schedules: [
      { title: 'Client feedback review', time: 'Tomorrow - 1:00 PM' },
      { title: 'Lunch with marketing team', time: 'Tomorrow - 12:00 PM' },
      { title: 'Project kickoff meeting', time: 'Next Monday - 9:00 AM' },
    ],
  },
];

const Schedule = ({ date = 'Today, 13 Sep 2021' }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-blue-900">Upcoming Schedule</h2>
      <span className="text-sm text-gray-500">{date}</span>
    </div>

    {scheduleData.map((category, index) => (
      <ScheduleList key={index} title={category.title} schedules={category.schedules} />
    ))}

    <div className="text-center mt-4">
      <button className="text-red-500 text-sm font-medium hover:underline">Create a New Schedule</button>
    </div>
  </div>
);

export default Schedule;
