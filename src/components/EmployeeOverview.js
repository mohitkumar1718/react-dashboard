import React from 'react';
import StatBox from './StatBox'; 

const EmployeeOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 py-4 w-full">
      <StatBox 
        title="Total Employees" 
        count="216" 
        menCount="120" 
        womenCount="96" 
        percentage="+2%" 
        percentageText="+2% Past month" 
      />
      <StatBox 
        title="Talent Request" 
        count="16" 
        menCount="6" 
        womenCount="10" 
        percentage="+5%" 
        percentageText="+5% Past month" 
      />
      
    </div>
  );
};

export default EmployeeOverview;
