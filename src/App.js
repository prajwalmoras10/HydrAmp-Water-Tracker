import React from "react";
import WaterTracker from "./components/WaterTracker";
import Notification from "./components/Notification";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <WaterTracker />
      <Notification />
    </div>
  );
}

export default App;
