// src/pages/Dashboard.jsx
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import DashboardCards from '../components/DashboardCards';
import Announcements from '../components/Announcements';
import ActivityFeed from '../components/ActivityFeed';
import Schedule from '../components/Schedule';
import EmployeeOverview from '../components/EmployeeOverview';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <DashboardHeader />
        <div className="p-6 bg-gray-100 min-h-screen"> 
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <DashboardCards />
              <EmployeeOverview/>
              <Announcements />
            </div>
            <div className="space-y-6">
              <ActivityFeed />
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
