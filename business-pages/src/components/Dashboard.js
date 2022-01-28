import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import Reviews from "./Reviews";
import Analytics from "./Analytics";
import Improve from "./Improve";
import Account from "./Account";
import "../css/dashboard.css";
function Dashboard() {
  const [main, setMain] = useState("messages");
  const switchMain = () => {
    switch (main) {
      case "messages":
        return <Messages />;
      case "reviews":
        return <Reviews />;
      case "analytics":
        return <Analytics />;
        case "improve":
        return <Improve />;
        case "account":
        return <Account />;
      default:
        return <h1>No project match</h1>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <Sidebar main={main} setMain={setMain} />
      </div>
      <div className="dashboard-main">{switchMain()}</div>
    </div>
  );
}

export default Dashboard;
