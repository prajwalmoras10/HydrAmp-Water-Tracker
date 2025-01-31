import React from "react";

const Progress = ({ intake, goal }) => {
  const percentage = (intake / goal) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default Progress;
