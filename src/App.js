import React from "react";
import HeatmapView from "./components/HeatmapView";

function App() {
  const dummyIssues = [
    {
      location: { latitude: 19.076, longitude: 72.8777 },
      type: "Garbage"
    },
    {
      location: { latitude: 19.08, longitude: 72.88 },
      type: "Pothole"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 CivicFix AI</h1>
      <HeatmapView issues={dummyIssues} />
    </div>
  );
}

export default App;
