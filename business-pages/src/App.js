import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Navbar user={user} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
