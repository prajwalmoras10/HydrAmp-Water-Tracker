import React, { useState, useEffect } from "react";
import Progress from "./Progress";
import "../styles.css";

const WaterTracker = () => {
  const [intake, setIntake] = useState(() => Number(localStorage.getItem("waterIntake")) || 0);
  const [goal, setGoal] = useState(() => Number(localStorage.getItem("waterGoal")) || 2000); // Default Goal


  useEffect(() => {
    localStorage.setItem("waterIntake", intake);
  }, [intake]);

  useEffect(() => {
    localStorage.setItem("waterGoal", goal);
  }, [goal]);

  const addWater = (amount) => {
    setIntake((prev) => Math.min(prev + amount, goal));
  };

  const resetWater = () => {
    setIntake(0);
  };

  return (
    <div className="tracker">
      <h1>Water Tracker</h1>

      {/* Allow user to set daily goal */}
      <label>Set your Daily Goal (ml):</label>
      <input
        type="number"
        value={goal}
        onChange={(e) => setGoal(Number(e.target.value))}
      />

      <p>Daily Goal: {goal} ml</p>
      <p>Consumed: {intake} ml</p>

      <div className="buttons">
        <button onClick={() => addWater(250)}>+250ml</button>
        <button onClick={() => addWater(500)}>+500ml</button>
        <button onClick={resetWater}>Reset</button>
      </div>
      
      <Progress intake={intake} goal={goal} />
    </div>
  );
};

export default WaterTracker;
