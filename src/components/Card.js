import React from 'react';

const Card = ({ title, value, description, bgColor, textColor }) => (
  <div className={`p-4 rounded-lg ${bgColor}`}>
    <h2 className={`text-lg font-semibold ${textColor}`}>{title}</h2>
    <p className="text-3xl font-bold">{value}</p>
    <span className={textColor}>{description}</span>
  </div>
);

export default Card;
