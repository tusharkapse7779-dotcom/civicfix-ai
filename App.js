
import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";
import HeatmapView from "./components/HeatmapView";
import ReportIssue from "./components/ReportIssue";
import IssueList from "./components/IssueList";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await getDocs(collection(db, "issues"));
      const data = snapshot.docs.map(doc => doc.data());
      setIssues(data);
    };
    fetch();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 CivicFix AI</h1>
      <Login />
      <Dashboard />
      <ReportIssue />
      <HeatmapView issues={issues} />
      <IssueList />
    </div>
  );
}
export default App;
