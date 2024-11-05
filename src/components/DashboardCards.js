import React from 'react';
import Card from './Card'; 

const DashboardCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card 
      title="Available Position" 
      value="24" 
      description="4 Urgently needed" 
      bgColor="bg-pink-100" 
      textColor="text-red-500" 
    />
    <Card 
      title="Job Open" 
      value="10" 
      description="4 Active hiring" 
      bgColor="bg-blue-100" 
      textColor="text-blue-500" 
    />
    <Card 
      title="New Employees" 
      value="24" 
      description="4 Department" 
      bgColor="bg-purple-100" 
      textColor="text-purple-500" 
    />
  </div>
);

export default DashboardCards;
