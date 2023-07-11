import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Profile } from "./screens";
import "./app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Profile />} />
          <Route path="/message" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
